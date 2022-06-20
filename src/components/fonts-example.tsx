import React, { useState, useEffect } from "react";

import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

const FontsExample = () => {
  const textClasses = "text-2xl";

  return (
    <View className="flex justify-center items-center">
      <Text className={[textClasses, "font-sans-100"].join(" ")}>
        Inter Thin Font
      </Text>
      <Text className={[textClasses, "font-sans-200"].join(" ")}>
        Inter Extra Light
      </Text>
      <Text className={[textClasses, "font-sans-300"].join(" ")}>
        Inter Light
      </Text>
      <Text className={[textClasses, "font-sans-400"].join(" ")}>
        Inter Regular
      </Text>
      <Text className={[textClasses, "font-sans-500"].join(" ")}>
        Inter Medium
      </Text>
      <Text className={[textClasses, "font-sans-600"].join(" ")}>
        Inter Semi Bold
      </Text>
      <Text className={[textClasses, "font-sans-700"].join(" ")}>
        Inter Bold
      </Text>
      <Text className={[textClasses, "font-sans-800"].join(" ")}>
        Inter Extra Bold
      </Text>
      <Text className={[textClasses, "font-sans-900"].join(" ")}>
        Inter Black
      </Text>
    </View>
  );
};

export default FontsExample;
