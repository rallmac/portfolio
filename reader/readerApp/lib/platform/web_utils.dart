// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:typed_data';
import 'dart:ui' as ui; // ignore: undefined_prefixed_name
import 'dart:async';

void openUrl(String url) {
  html.window.open(url, '_blank');
}

void showAlert(String message) {
  html.window.alert(message);
}

void playAudioBytes(Uint8List bytes, {String mimeType = 'audio/wav'}) {
  final blob = html.Blob([bytes], mimeType);
  final url = html.Url.createObjectUrlFromBlob(blob);

  // Try to play inline by inserting an <audio> element into the audio container
  final container = html.document.getElementById('audio-container');
  final audio = html.AudioElement()
    ..controls = true
    ..src = url
    ..autoplay = true;

  if (container != null) {
    container.children.clear();
    container.append(audio);
  } else {
    // Fallback: open in a new tab
    html.window.open(url, '_blank');
  }

  _lastAudio = audio;
  _startProgressTimer();
}

String? _lastPickedPdfName;
String? getLastPickedPdfName() => _lastPickedPdfName;

html.AudioElement? _lastAudio;
Timer? _progressTimer;
final StreamController<Duration> _positionController =
    StreamController<Duration>.broadcast();
final StreamController<Duration> _durationController =
    StreamController<Duration>.broadcast();

Stream<Duration> positionStream() => _positionController.stream;
Stream<Duration> durationStream() => _durationController.stream;

void _withAudio(void Function(html.AudioElement a) f) {
  final container = html.document.getElementById('audio-container');
  if (container == null) return;
  final audio = container.querySelector('audio') as html.AudioElement?;
  if (audio == null) return;
  try {
    f(audio);
  } catch (_) {}
}

Future<void> pauseAudio() async {
  _withAudio((a) => a.pause());
}

Future<void> resumeAudio() async {
  _withAudio((a) => a.play());
}

Future<void> stopAudio() async {
  _withAudio((a) {
    a.pause();
    a.currentTime = 0;
  });
  _positionController.add(Duration.zero);
  _stopProgressTimer();
}

void _startProgressTimer() {
  _stopProgressTimer();
  _progressTimer = Timer.periodic(const Duration(milliseconds: 300), (_) {
    final a = _lastAudio;
    if (a == null) return;
    final pos = Duration(milliseconds: (a.currentTime * 1000).round());
    _positionController.add(pos);

    final durSeconds = a.duration;
    if (!durSeconds.isNaN && durSeconds.isFinite && durSeconds > 0) {
      final dur = Duration(milliseconds: (durSeconds * 1000).round());
      _durationController.add(dur);
    }
  });
}

void _stopProgressTimer() {
  _progressTimer?.cancel();
  _progressTimer = null;
}

/// Register a platform view factory for the audio container so Flutter's
/// `HtmlElementView` can show a DOM container that we target for playback.
void registerAudioView() {
  try {
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory('audio-container', (
      int viewId,
    ) {
      final element = html.DivElement()..id = 'audio-container';
      return element;
    });
  } catch (e) {
    // If registration fails, ignore — this is best-effort for web builds.
  }
}

/// Opens a file picker for a PDF, uploads it to [apiBase]/tts/pdf and returns
/// the response bytes (or throws on error).
Future<Uint8List> pickPdfAndUpload(
  String apiBase, {
  String voice = 'male',
}) async {
  final completer = Completer<Uint8List>();

  final input = html.FileUploadInputElement();
  input.accept = 'application/pdf';
  input.click();
  input.onChange.listen((_) async {
    final files = input.files;
    if (files == null || files.isEmpty) {
      completer.completeError('No file selected');
      return;
    }
    final file = files.first;
    _lastPickedPdfName = file.name;
    try {
      final reader = html.FileReader();
      reader.readAsArrayBuffer(file);
      await reader.onLoad.first;
      final res = reader.result;
      Uint8List data;
      if (res is ByteBuffer) {
        data = res.asUint8List();
      } else if (res is List<int>) {
        data = Uint8List.fromList(List<int>.from(res));
      } else {
        data = Uint8List.fromList(res as List<int>);
      }

      final formData = html.FormData();
      final blob = html.Blob([data], 'application/pdf');
      formData.appendBlob('file', blob, file.name);

      final request = await html.HttpRequest.request(
        '$apiBase/tts/pdf?format=mp3&voice=$voice',
        method: 'POST',
        sendData: formData,
        responseType: 'arraybuffer',
      );
      if (request.status != 200) {
        completer.completeError('Server error: ${request.status}');
        return;
      }

      final resp = request.response;
      Uint8List respBytes;
      if (resp is ByteBuffer) {
        respBytes = resp.asUint8List();
      } else if (resp is List<int>) {
        respBytes = Uint8List.fromList(List<int>.from(resp));
      } else if (resp is String) {
        respBytes = Uint8List.fromList(resp.codeUnits);
      } else {
        completer.completeError(
          'Unsupported response type: ${resp.runtimeType}',
        );
        return;
      }

      completer.complete(respBytes);
    } catch (e) {
      completer.completeError(e.toString());
    }
  });

  return completer.future;
}
