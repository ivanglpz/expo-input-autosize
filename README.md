# expo-input-autosize

A React Native Expo **component** that you can copy and paste into your project to have a **multiline text input with automatic height resizing**.

---

## Overview

This component provides a multiline text input that automatically adjusts its height as the user types, allowing any amount of text without manual resizing.

### Key Features

- Auto-sizing height based on content length
- Supports multiline input with natural wrapping
- Dark-themed style (black background with white text)
- Includes buttons to append sample text or clear the input
- Uses React Native's `TextInput` and `react-native-svg` for UI icons

---

## Usage

Just copy the entire component code and paste it into your React Native Expo project. Then import and use it like any other component:

```tsx
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { InputAutoResizing } from "./components/InputAutoResizing";

export default function App() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: "flex",
      }}
    >
      <View style={styles.container}>
        <StatusBar
          style={"dark"}
          backgroundColor={"black"}
          translucent={false}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <InputAutoResizing value={text} onChange={(e) => setText(e)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
  },
});
```

## Requirements

- React Native with Expo
- `react-native-svg` (install with `expo install react-native-svg`)

## Inspiration and References

This component is inspired by and partially based on techniques from the official Expo guide on editing rich text:

[Editing Rich Text in Expo](https://docs.expo.dev/guides/editing-richtext/)

This guide provides valuable insights on how to handle multiline inputs with dynamic sizing in React Native, which helped shape this component's behavior.

Feel free to adapt the styles or functionality to your app’s needs!
