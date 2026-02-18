# Reader App Deployment Guide

## Server Deployment (Render)

### Configuration
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn server.main:app --host 0.0.0.0 --port $PORT`
- **URL**: https://reader-vmh1.onrender.com

### Server Endpoints
- `POST /tts` - Text to speech conversion
  - Body: `{ "text": "your text here", "filename": "optional.wav" }`
  - Returns: WAV audio file
  
- `POST /tts/pdf` - PDF to speech conversion
  - Multipart form data with PDF file
  - Returns: WAV audio file

## Flutter App Configuration

### API Connection
The app is configured to connect to the production server at:
- **Production URL**: `https://reader-vmh1.onrender.com`
- **Override**: Can be set at build time using `--dart-define=API_BASE=https://your-url.com`

### Android APK Build

1. **Ensure dependencies are installed**:
   ```bash
   cd reader
   flutter pub get
   ```

2. **Build the release APK**:
   ```bash
   flutter build apk --release
   ```

3. **Build for specific CPU architectures** (smaller APK size):
   ```bash
   # For most devices (ARM64)
   flutter build apk --release --target-platform android-arm64
   
   # For older devices (ARM32)
   flutter build apk --release --target-platform android-arm
   ```

4. **Find the APK**:
   - Located at: `build/app/outputs/flutter-apk/app-release.apk`

### Custom Server URL (Optional)
To build with a different server URL:
```bash
flutter build apk --release --dart-define=API_BASE=https://your-custom-url.com
```

### Testing the APK
1. Install on an Android device
2. Ensure the device has internet connectivity
3. Test both text-to-speech and PDF upload features

## Android Permissions
The app requires the following permissions (already configured):
- `INTERNET` - For API communication with the server

## Platform Support
- ✅ **Android** - Full support (TTS and PDF upload)
- ✅ **Web** - Full support with in-browser audio playback
- ⚠️ **iOS/Desktop** - UI works, but audio playback needs platform-specific implementation

## Troubleshooting

### Server Issues
- Check Render logs if endpoints are not responding
- Verify CORS is enabled (already configured for all origins)
- Ensure all dependencies are installed from `requirements.txt`

### APK Issues
- If network requests fail, verify INTERNET permission in `AndroidManifest.xml`
- Check that the device can access the server URL
- Review Android logcat for detailed error messages: `adb logcat | grep flutter`

### Audio Playback
- On web: Audio plays directly in the browser
- On Android: Currently shows "Playback available in web builds" message
  - To enable Android audio, integrate `audioplayers` or `just_audio` package in `mobile_utils.dart`
