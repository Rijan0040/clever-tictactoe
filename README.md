
# Clever Tic Tac Tactics

A modern, offline-capable Tic Tac Toe game that can be installed as a native mobile application.

## Features

- Classic Tic Tac Toe gameplay
- Score tracking
- Responsive design that works on all devices
- Works offline after installation
- Native mobile app experience

## Building the App

To build and run the app on your device:

1. Clone this repository to your local machine
2. Install dependencies:
   ```
   npm install
   ```
3. Build the web app:
   ```
   npm run build
   ```
4. Add the platforms you need:
   ```
   npx cap add android
   npx cap add ios  # if on macOS
   ```
5. Sync the web code to the native projects:
   ```
   npx cap sync
   ```

## Running on Android

To run on Android:

1. Make sure you have Android Studio installed
2. Open the Android project:
   ```
   npx cap open android
   ```
3. Build and run from Android Studio to your connected device or emulator

## Running on iOS (requires macOS)

To run on iOS:

1. Make sure you have Xcode installed
2. Open the iOS project:
   ```
   npx cap open ios
   ```
3. Build and run from Xcode to your connected device or simulator

## Development

For local development:

```
npm run dev
```

To update the native app after making changes:

```
npm run build
npx cap sync
```
