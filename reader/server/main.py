from fastapi.responses import StreamingResponse
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from fpdf import FPDF
import io

# PDF text extraction
try:
    from PyPDF2 import PdfReader
except Exception:
    PdfReader = None

app = FastAPI()

# CORS: allow requests from the Next.js dev server and localhost for development
app.add_middleware(
    CORSMiddleware,
    # Allow all origins for development convenience (adjust for production)
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Try to import core as a package import (used when running as `server.main:app`),
# but fall back to a direct import when running the module as a script.
try:
    from . import core
except Exception:
    import core


class TTSRequest(BaseModel):
    text: str
    filename: Optional[str] = None
    format: Optional[str] = "wav"
    voice: Optional[str] = "male"  # 'male' or 'female'


@app.post("/tts", response_class=StreamingResponse)
async def tts_endpoint(req: TTSRequest):
    """Return generated speech audio for the provided text.

    Expects JSON: { "text": "...", "filename": "optional.wav" }
    """
    if not req.text or not req.text.strip():
        raise HTTPException(status_code=400, detail="text is required")

    print(f"[TTS] Received request: format={req.format}, voice={req.voice}")
    
    # Map voice selection to TLD for different voice characteristics (gTTS fallback)
    # 'com' (US) tends to have deeper/male-sounding voice
    # 'co.uk' (UK) and 'com.au' (Australian) have different characteristics
    tld = "com" if req.voice == "male" else "co.uk"
    
    try:
        audio_bytes, media_type = core.generate_audio_bytes(req.text, req.format or "mp3", gender=req.voice or "male", tld=tld)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    buf = io.BytesIO(audio_bytes)
    buf.seek(0)
    # derive filename if not provided
    default_ext = "mp3" if media_type == "audio/mpeg" else "wav"
    filename = req.filename or f"speech.{default_ext}"
    return StreamingResponse(
        content=buf,
        media_type=media_type,
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )


@app.post("/tts/pdf", response_class=StreamingResponse)
async def tts_pdf(file: UploadFile = File(...), filename: Optional[str] = None, format: Optional[str] = "mp3", voice: Optional[str] = "male"):
    """Accept a PDF upload, extract text, and return audio with selected voice."""
    if PdfReader is None:
        raise HTTPException(status_code=500, detail="PyPDF2 is not installed on the server")

    print(f"[TTS PDF] Received request: format={format}, voice={voice}")
    
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    content = await file.read()
    try:
        reader = PdfReader(io.BytesIO(content))
        pages = []
        for p in reader.pages:
            text = p.extract_text() or ""
            pages.append(text)
        full_text = "\n".join(pages).strip()
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to extract PDF text: {e}")

    if not full_text:
        raise HTTPException(status_code=400, detail="No extractable text found in PDF")

    # Map voice selection to TLD (gTTS fallback)
    tld = "com" if voice == "male" else "co.uk"
    
    try:
        audio_bytes, media_type = core.generate_audio_bytes(full_text, format or "mp3", gender=voice or "male", tld=tld)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    buf = io.BytesIO(audio_bytes)
    buf.seek(0)
    # choose extension based on media type
    ext = "mp3" if media_type == "audio/mpeg" else "wav"
    outname = filename or (file.filename.rsplit('.', 1)[0] + f'.{ext}')
    return StreamingResponse(
        content=buf,
        media_type=media_type,
        headers={"Content-Disposition": f"attachment; filename={outname}"}
    )


@app.get("/generate-pdf", response_class=StreamingResponse)
async def generate_pdf():
    # 1. Create a PDF object
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.cell(200, 10, txt="Hello, FastAPI PDF Generation!", ln=True, align="C")
    pdf.cell(200, 10, txt="This is a dynamically generated PDF.", ln=True, align="C")

    # 2. Save the PDF to a bytes buffer
    pdf_output = pdf.output()
    pdf_bytes = io.BytesIO(pdf_output.encode('latin-1'))

    # 3. Return as a StreamingResponse
    return StreamingResponse(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": "attachment;filename=dynamic_report.pdf"}
    )

