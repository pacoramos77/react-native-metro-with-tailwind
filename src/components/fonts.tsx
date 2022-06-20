import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet, TextProps } from "react-native";
import AppLoading from "expo-app-loading";
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
import { fontStyle } from "../utils/fonts";

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  const textClasses = "color-slate-100 text-2xl";
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    } else {
      SplashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex justify-center items-center">
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "thin")}
      >
        Inter Thin Font
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "extralight")}
      >
        Inter Extra Light
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "light")}
      >
        Inter Light
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "normal")}
      >
        Inter Regular
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "medium")}
      >
        Inter Medium
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "semibold")}
      >
        Inter Semi Bold
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "bold")}
      >
        Inter Bold
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "extrabold")}
      >
        Inter Extra Bold
      </Text>
      <Text
        className={[textClasses].join(" ")}
        style={fontStyle("sans", "black")}
      >
        Inter Black
      </Text>
    </View>
  );
};
