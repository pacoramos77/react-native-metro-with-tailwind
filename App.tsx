import { TailwindProvider } from "tailwindcss-react-native";
import { Provider as PaperProvider, ThemeBase } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import "expo-dev-client";

import AssetsProvider from "./src/components/assets-provider";
import theme from "./themes";
import { Root } from "./src/root";
import { View } from "react-native";

export default function App() {
  return (
    <AssetsProvider>
      <TailwindProvider>
        <PaperProvider theme={theme as ThemeBase}>
          <StatusBar
            animated
            style="light"
            backgroundColor={theme.colors.primary}
          />
          <Root />
        </PaperProvider>
      </TailwindProvider>
    </AssetsProvider>
  );
}
