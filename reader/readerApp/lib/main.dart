// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'platform/platform_utils.dart';
import 'dart:convert';
import 'dart:async';
// 'dart:typed_data' not required here; platform utils handle typed data.
import 'package:flutter/foundation.dart' show kIsWeb;

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TTS Flutter Web',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const TTSPage(),
    );
  }
}

class TTSPage extends StatefulWidget {
  const TTSPage({super.key});

  @override
  State<TTSPage> createState() => _TTSPageState();
}

class _TTSPageState extends State<TTSPage> {
  final TextEditingController _controller = TextEditingController();
  bool _loading = false;
  String _status = '';
  String? _lastPdfName;
  Duration _position = Duration.zero;
  Duration _duration = Duration.zero;
  StreamSubscription<Duration>? _posSub;
  StreamSubscription<Duration>? _durSub;
  String _selectedVoice = 'male'; // Voice selection: 'male' or 'female'
  // audio URL is managed by the web audio container; keep no local URL field

  final String apiBase = const String.fromEnvironment(
    'API_BASE',
    defaultValue: 'https://reader-ashen.vercel.app',
  );

  Future<void> speakText() async {
    final text = _controller.text.trim();
    if (text.isEmpty) {
      return;
    }
    setState(() => _loading = true);
    try {
      final resp = await http.post(
        Uri.parse('$apiBase/tts'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'text': text,
          'filename': 'speech.mp3',
          'format': 'mp3',
          'voice': _selectedVoice,
        }),
      );
      if (resp.statusCode != 200) {
        throw Exception('Server error: ${resp.statusCode}');
      }

      // Play the returned WAV bytes (platform-specific implementation)
      playAudioBytes(resp.bodyBytes, mimeType: 'audio/mpeg');
      setState(() => _status = 'Playing text audio');
    } catch (e) {
      showAlert('Failed: $e');
    } finally {
      setState(() => _loading = false);
    }
  }

  Future<void> uploadPdf() async {
    setState(() => _loading = true);
    try {
      final respBytes = await pickPdfAndUpload(apiBase, voice: _selectedVoice);
      playAudioBytes(respBytes, mimeType: 'audio/mpeg');
      setState(() {
        _status = 'Playing PDF audio';
        _lastPdfName = getLastPickedPdfName();
        _position = Duration.zero;
      });
    } catch (e) {
      showAlert('Failed to generate audio from PDF: $e');
    } finally {
      setState(() => _loading = false);
    }
  }

  @override
  void initState() {
    super.initState();
    // Register a platform view for the audio container (web only).
    // This returns a div with id 'audio-container' that web_utils will target.
    // Platform-specific registration handled by platform utils.
    try {
      registerAudioView();
    } catch (_) {
      // ignore - registration is best-effort and may throw on some platforms
    }

    // Listen to platform-specific position/duration streams to drive progress UI.
    _posSub = positionStream().listen((d) {
      setState(() => _position = d);
    });
    _durSub = durationStream().listen((d) {
      setState(() => _duration = d);
    });
  }

  @override
  void dispose() {
    _posSub?.cancel();
    _durSub?.cancel();
    super.dispose();
  }

  String _formatProgress() {
    String fmt(Duration d) {
      final m = d.inMinutes.remainder(60).toString().padLeft(2, '0');
      final s = d.inSeconds.remainder(60).toString().padLeft(2, '0');
      return '$m:$s';
    }

    final total = _duration;
    final pos = _position;
    if (total == Duration.zero) {
      return '${fmt(pos)} / --:--';
    }
    final remaining = total - pos;
    return '${fmt(pos)} / ${fmt(total)}  (-${fmt(remaining.isNegative ? Duration.zero : remaining)})';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Welcome to Reader App')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  const Text(
                    'Voice: ',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                  ),
                  const SizedBox(width: 8),
                  DropdownButton<String>(
                    value: _selectedVoice,
                    items: const [
                      DropdownMenuItem(value: 'male', child: Text('Male')),
                      DropdownMenuItem(value: 'female', child: Text('Female')),
                    ],
                    onChanged: (String? newValue) {
                      if (newValue != null) {
                        setState(() => _selectedVoice = newValue);
                      }
                    },
                  ),
                ],
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _controller,
                maxLines: 8,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  hintText: 'Enter or paste text here',
                ),
              ),
              const SizedBox(height: 12),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: _loading ? null : speakText,
                    child: Text(_loading ? 'Generating...' : 'Speak Text'),
                  ),
                  const SizedBox(width: 8),
                  ElevatedButton(
                    onPressed: _loading ? null : uploadPdf,
                    child: Text(_loading ? 'Processing...' : 'Upload PDF'),
                  ),
                ],
              ),
              if (_loading) ...[
                const SizedBox(height: 12),
                const LinearProgressIndicator(),
              ],
              if (_lastPdfName != null) ...[
                const SizedBox(height: 8),
                Text('Selected PDF: ${_lastPdfName!}'),
              ],
              const SizedBox(height: 16),
              const Text(
                'Playback',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              // Inline audio container (Web only). The web_utils will insert
              // an <audio> element into this container when audio bytes arrive.
              SizedBox(
                height: 80,
                child: kIsWeb
                    ? HtmlElementView(viewType: 'audio-container')
                    : const SizedBox.shrink(),
              ),
              const SizedBox(height: 8),
              LinearProgressIndicator(
                value: _duration.inMilliseconds > 0
                    ? _position.inMilliseconds / _duration.inMilliseconds
                    : null,
              ),
              const SizedBox(height: 4),
              Text(_formatProgress()),
              if (!kIsWeb) ...[
                const SizedBox(height: 8),
                Row(
                  children: [
                    ElevatedButton(
                      onPressed: _loading ? null : pauseAudio,
                      child: const Text('Pause'),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: _loading ? null : resumeAudio,
                      child: const Text('Resume'),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: _loading ? null : stopAudio,
                      child: const Text('Stop'),
                    ),
                  ],
                ),
              ],
              if (_status.isNotEmpty) ...[
                const SizedBox(height: 8),
                Text(_status),
              ],
              const SizedBox(height: 24),
              // Advertisement Footer Card
              Card(
                elevation: 2,
                color: Colors.blue.shade50,
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    vertical: 16.0,
                    horizontal: 12.0,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const Text(
                        'Find a job today',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.blue,
                        ),
                      ),
                      const SizedBox(height: 8),
                      GestureDetector(
                        onTap: () {
                          openUrl('https://www.jobstraight.com');
                        },
                        child: const Text(
                          'www.jobstraight.com',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.blue,
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
