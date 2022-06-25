import React from "react";
import { View, Text } from "react-native";
import FontsExample from "../components/fonts-example";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ flex: 1 }}>Settings!</Text>

      <FontsExample />
    </View>
  );
}
