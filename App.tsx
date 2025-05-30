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
        backgroundColor: "#f4f4f4",
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
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
  },
});
