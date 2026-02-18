#!/usr/bin/env python3
"""Test script to list and test edge-tts voices."""
import asyncio
import edge_tts

async def list_voices():
    """List all available voices."""
    voices = await edge_tts.list_voices()
    
    # Filter for English male voices
    print("=== English Male Voices ===")
    for voice in voices:
        if voice["Locale"].startswith("en-") and voice["Gender"] == "Male":
            print(f"{voice['ShortName']}: {voice['FriendlyName']}")
    
    print("\n=== English Female Voices ===")
    for voice in voices:
        if voice["Locale"].startswith("en-") and voice["Gender"] == "Female":
            print(f"{voice['ShortName']}: {voice['FriendlyName']}")

async def test_voice(voice_name: str, text: str = "Hello, this is a test."):
    """Test a specific voice."""
    print(f"\nTesting voice: {voice_name}")
    try:
        communicate = edge_tts.Communicate(text, voice_name)
        await communicate.save(f"test_{voice_name.replace('-', '_')}.mp3")
        print(f"✓ Successfully generated audio with {voice_name}")
    except Exception as e:
        print(f"✗ Error with {voice_name}: {e}")

if __name__ == "__main__":
    asyncio.run(list_voices())
    
    # Test a few male voices
    print("\n=== Testing Male Voices ===")
    asyncio.run(test_voice("en-US-EricNeural"))
    asyncio.run(test_voice("en-US-AndrewNeural"))
    asyncio.run(test_voice("en-US-GuyNeural"))
