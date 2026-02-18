import subprocess
import sys
import re
import shutil
import tempfile
import io
import asyncio

try:
    from gtts import gTTS  # lightweight Google TTS
except Exception:
    gTTS = None

try:
    import edge_tts
except Exception:
    edge_tts = None

CONTRACTIONS = {
    "aren't": "are not",
    "can't": "cannot",
    "couldn't": "could not",
    "didn't": "did not",
    "doesn't": "does not",
    "don't": "do not",
    "hadn't": "had not",
    "hasn't": "has not",
    "haven't": "have not",
    "he'd": "he would",
    "he'll": "he will",
    "he's": "he is",
    "i'd": "i would",
    "i'll": "i will",
    "i'm": "i am",
    "i've": "i have",
    "isn't": "is not",
    "it's": "it is",
    "let's": "let us",
    "mightn't": "might not",
    "mustn't": "must not",
    "she'd": "she would",
    "she'll": "she will",
    "she's": "she is",
    "shouldn't": "should not",
    "that's": "that is",
    "there's": "there is",
    "they'd": "they would",
    "they'll": "they will",
    "they're": "they are",
    "they've": "they have",
    "wasn't": "was not",
    "we'd": "we would",
    "we're": "we are",
    "we've": "we have",
    "weren't": "were not",
    "what's": "what is",
    "who's": "who is",
    "won't": "will not",
    "wouldn't": "would not",
    "you're": "you are",
    "you've": "you have"
}

def normalize_quotes(text):
    return (
        text.replace("’", "'")
            .replace("‘", "'")
            .replace("“", '"')
            .replace("”", '"')
    )

def expand_contractions(text):
    def replace(match):
        word = match.group(0)
        expanded = CONTRACTIONS[word.lower()]
        if word.isupper():
            return expanded.upper()
        elif word[0].isupper():
            return expanded.capitalize()
        return expanded

    pattern = re.compile(
        r'\b(' + '|'.join(map(re.escape, CONTRACTIONS.keys())) + r')\b',
        re.IGNORECASE
    )

    return pattern.sub(replace, text)

def handle_brackets(text):
    # Ensure pauses around bracketed content
    text = re.sub(r'\((.*?)\)', r'. \1 .', text)
    text = re.sub(r'\[(.*?)\]', r'. \1 .', text)
    text = re.sub(r'\{(.*?)\}', r'. \1 .', text)
    return text

def handle_commas(text):
    # Convert commas to semicolons for audible pauses
    text = re.sub(r',', ';', text)
    return text

def normalize_whitespace(text):
    text = re.sub(r'\n{2,}', '. ', text)  # paragraph breaks
    text = re.sub(r'\n', ' ', text)       # line breaks
    text = re.sub(r'\s{2,}', ' ', text)
    return text.strip()

def generate_wav_bytes(text: str) -> bytes:
    """Generate WAV audio bytes from text.

    This function tries to use the `text2wave` utility (part of festival/text2wave)
    to produce a WAV stream on stdout. If `text2wave` isn't available, it raises
    a RuntimeError with an explanatory message.

    Returns: raw WAV bytes
    """
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    text = normalize_quotes(text)
    text = expand_contractions(text)
    text = re.sub(r'\s+', ' ', text).strip()

    text2wave = shutil.which("text2wave")
    if text2wave:
        # text2wave can write to stdout with -o -
        proc = subprocess.run([text2wave, "-o", "-"], input=text.encode('utf-8'), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if proc.returncode != 0:
            err = proc.stderr.decode('utf-8', errors='ignore')
            raise RuntimeError(f"text2wave failed: {err}")
        return proc.stdout

    # If text2wave isn't available, we do not attempt a brittle festival fallback here.
    raise RuntimeError(
        "text2wave utility not found. Install festival/text2wave (e.g. on Debian: 'sudo apt install festival festival-dev') "
        "or ensure text2wave is on PATH."
    )


def generate_mp3_bytes(text: str, lang: str = "en", tld: str = "com") -> bytes:
    """Generate MP3 audio bytes from text using gTTS.

    Requires the `gtts` package and outbound network connectivity.
    Args:
        text: The text to convert to speech
        lang: Language code (default: 'en')
        tld: Top-level domain for accent/voice (e.g., 'com' for US, 'co.uk' for UK, 'com.au' for Australian)
    """
    if gTTS is None:
        raise RuntimeError("gTTS is not installed on the server")
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    text = normalize_quotes(text)
    text = expand_contractions(text)
    text = re.sub(r'\s+', ' ', text).strip()

    fp = io.BytesIO()
    try:
        gTTS(text=text, lang=lang, tld=tld, slow=False).write_to_fp(fp)
    except Exception as e:
        raise RuntimeError(f"gTTS failed: {e}")
    return fp.getvalue()


async def generate_audio_with_edge_tts_async(text: str, gender: str = "male") -> bytes:
    """Generate audio bytes using edge-tts with specified gender.
    
    Args:
        text: The text to convert to speech
        gender: 'male' or 'female'
    Returns:
        MP3 audio bytes
    """
    if edge_tts is None:
        raise RuntimeError("edge-tts is not installed")
    
    if not isinstance(text, str):
        raise TypeError("text must be a string")
    
    text = normalize_quotes(text)
    text = expand_contractions(text)
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Select voice based on gender
    # Male voices: en-US-EricNeural (heavy/deep), en-US-AndrewNeural, en-US-GuyNeural, en-GB-RyanNeural
    # Female voices: en-US-JennyNeural, en-US-AriaNeural, en-GB-SoniaNeural
    if gender.lower() == "male":
        voice = "en-US-EricNeural"  # Heavy, deep male voice
    else:
        voice = "en-US-JennyNeural"  # Clear female voice
    
    print(f"[TTS] Generating audio with gender='{gender}', selected voice='{voice}'")
    
    # Generate audio to a temp file
    import tempfile
    import os
    
    with tempfile.NamedTemporaryFile(suffix='.mp3', delete=False) as tmp:
        tmp_path = tmp.name
    
    try:
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(tmp_path)
        
        with open(tmp_path, 'rb') as f:
            audio_data = f.read()
        
        os.unlink(tmp_path)
        return audio_data
    except Exception as e:
        if os.path.exists(tmp_path):
            os.unlink(tmp_path)
        raise RuntimeError(f"edge-tts failed: {e}")


def generate_audio_with_edge_tts(text: str, gender: str = "male") -> bytes:
    """Synchronous wrapper for edge-tts audio generation."""
    try:
        loop = asyncio.get_event_loop()
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
    
    return loop.run_until_complete(generate_audio_with_edge_tts_async(text, gender))


def generate_audio_bytes(text: str, fmt: str = "wav", gender: str = "male", tld: str = "com") -> tuple[bytes, str]:
    """Generate audio bytes and return (bytes, media_type) based on requested format.

    - Tries edge-tts first for proper gender selection (works on cloud servers)
    - If fmt == 'wav' and text2wave is available, returns WAV bytes.
    - Otherwise, falls back to MP3 via gTTS and returns ('audio/mpeg').
    Args:
        text: The text to convert to speech
        fmt: Audio format ('wav' or 'mp3')
        gender: 'male' or 'female' for voice selection
        tld: Top-level domain for accent/voice selection (gTTS fallback)
    """
    fmt = (fmt or "wav").lower()
    
    # Try edge-tts first for proper gender selection
    if edge_tts is not None:
        try:
            data = generate_audio_with_edge_tts(text, gender=gender)
            return data, "audio/mpeg"
        except Exception as e:
            # If edge-tts fails, fall through to other options
            print(f"edge-tts failed: {e}, trying alternatives")
    
    if fmt == "wav":
        try:
            data = generate_wav_bytes(text)
            return data, "audio/wav"
        except Exception:
            # fall through to mp3 fallback
            pass

    # default / fallback to mp3
    data = generate_mp3_bytes(text, tld=tld)
    return data, "audio/mpeg"


if __name__ == "__main__":
    # Keep previous CLI behavior for backward compatibility: read stdin, normalize and send to festival for playback.
    print("Paste your paragraph (Ctrl+D to finish):")
    raw = sys.stdin.read()

    text = normalize_quotes(raw)
    text = expand_contractions(text)
    text = re.sub(r'\s+', ' ', text)

    subprocess.run(
        ["festival", "--tts"],
        input=text,
        text=True
    )

