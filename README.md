# TrueSheet: context menu inside a sheet is missing from the accessibility hierarchy

A one-screen Expo app (`App.tsx`). A non-dimmed `TrueSheet` opens on launch, with a native context menu (`@expo/ui` SwiftUI `Menu`) behind the "More actions" button in its header.

## Run

```sh
npm install
npx expo run:ios
```

Tap **More actions**: the menu (Edit, Share, Delete) opens on screen.

## See the bug

```sh
maestro test .maestro
```

The flow taps "More actions", then fails on `visible: "Share"` while the menu is open on screen: XCTest's hierarchy doesn't contain the menu.

Tested with `@lodev09/react-native-true-sheet` 4.1.2 (and 3.11.0), Expo 58, React Native 0.88.1, iOS 27.0 simulator, Xcode 27.1, Maestro 2.1.0.
