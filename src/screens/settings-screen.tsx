import React from "react";
import { View, Text } from "react-native";
import FontsExample from "../components/fonts-example";

export default function SettingsScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="flex-1 mt-5 text-4xl">Settings!</Text>

      <FontsExample />
    </View>
  );
}
