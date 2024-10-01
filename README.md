React Native App
Prerequisites
Before setting up the project, ensure you have:

Node.js: Download Node.js
React Native CLI: Install globally: npm install -g react-native-cli
Watchman: For macOS, install via Homebrew: brew install watchman
Android Studio: Required for Android development.
Xcode: Required for iOS development (macOS only).


Installation
Clone the repository:
cd your-repo


Install dependencies:
npm install


Or using Yarn:
yarn install

Running the App
Start the Metro Bundler:
npm start


Or with Yarn:

yarn start


Android:
Launch the Android emulator using Android Studio.
Run the app:
npm run android

iOS (macOS only):
Install iOS pods:
cd ios && pod install && cd ..
npm run ios
