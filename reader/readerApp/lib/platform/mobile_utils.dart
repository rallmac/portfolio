// ignore_for_file: avoid_print
import 'dart:typed_data';
import 'dart:io';
import 'package:url_launcher/url_launcher.dart';
import 'package:audioplayers/audioplayers.dart';
import 'package:file_picker/file_picker.dart';
import 'package:http/http.dart' as http;

void openUrl(String url) async {
  final uri = Uri.parse(url);
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

void showAlert(String message) {
  // Replace with SnackBar / Dialog
  print(message);
}

AudioPlayer? _player;
String? _lastPickedPdfName;

Stream<Duration> positionStream() {
  _player ??= AudioPlayer();
  return _player!.onPositionChanged;
}

Stream<Duration> durationStream() {
  _player ??= AudioPlayer();
  return _player!.onDurationChanged;
}

String? getLastPickedPdfName() => _lastPickedPdfName;

Future<void> playAudioBytes(
  Uint8List bytes, {
  String mimeType = 'audio/wav',
}) async {
  // Basic mobile playback using audioplayers from in-memory bytes.
  _player ??= AudioPlayer();
  try {
    await _player!.stop();
    await _player!.play(BytesSource(bytes));
  } catch (e) {
    print('Failed to play audio: $e');
  }
}

/// No-op on mobile / desktop. Web build will register a real view.
void registerAudioView() {}

/// Pick a PDF on mobile and upload to the server, returning audio bytes.
Future<Uint8List> pickPdfAndUpload(
  String apiBase, {
  String voice = 'male',
}) async {
  final result = await FilePicker.platform.pickFiles(
    type: FileType.custom,
    allowedExtensions: ['pdf'],
    withData: true,
  );
  if (result == null || result.files.isEmpty) {
    throw Exception('No file selected');
  }

  final picked = result.files.first;
  _lastPickedPdfName = picked.name.isNotEmpty ? picked.name : 'document.pdf';
  Uint8List? data = picked.bytes;
  if (data == null) {
    final path = picked.path;
    if (path == null) {
      throw Exception('Unable to read selected file');
    }
    data = await File(path).readAsBytes();
  }

  final uri = Uri.parse('$apiBase/tts/pdf?format=mp3&voice=$voice');
  final request = http.MultipartRequest('POST', uri);
  request.files.add(
    http.MultipartFile.fromBytes('file', data, filename: _lastPickedPdfName!),
  );
  final streamed = await request.send();
  final response = await http.Response.fromStream(streamed);
  if (response.statusCode != 200) {
    throw Exception('Server error: ${response.statusCode}');
  }
  return response.bodyBytes;
}

Future<void> pauseAudio() async {
  try {
    await _player?.pause();
  } catch (_) {}
}

Future<void> resumeAudio() async {
  try {
    await _player?.resume();
  } catch (_) {}
}

Future<void> stopAudio() async {
  try {
    await _player?.stop();
  } catch (_) {}
}
