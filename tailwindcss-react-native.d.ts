import type ReactNative from "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string | string[];
  }

  interface TextProps {
    className?: string | string[];
  }
}
