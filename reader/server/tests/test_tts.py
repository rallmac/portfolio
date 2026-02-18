from fastapi.testclient import TestClient

import server.main as main
import server.core as core


def test_tts_endpoint_monkeypatched(monkeypatch):
    # monkeypatch the core generate_wav_bytes to avoid depending on external binaries
    def fake_generate(text: str) -> bytes:
        # return a tiny fake WAV-like header to validate the endpoint behaviour
        return b"RIFFFAKEWAVE"

    monkeypatch.setattr(core, "generate_wav_bytes", fake_generate)

    client = TestClient(main.app)
    resp = client.post("/tts", json={"text": "Hello world", "filename": "hello.wav"})
    assert resp.status_code == 200
    assert resp.headers.get("content-type", "").startswith("audio/wav")
    assert resp.content.startswith(b"RIFF")
