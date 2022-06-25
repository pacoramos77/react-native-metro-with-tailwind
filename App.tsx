import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import "expo-dev-client";

import AssetsProvider from "./src/components/assets-provider";
import theme from "./themes";
import { Root } from "./src/root";

export default function App() {
  return (
    <AssetsProvider>
      <TailwindProvider>
        <PaperProvider theme={theme}>
          <Root />
        </PaperProvider>
      </TailwindProvider>
    </AssetsProvider>
  );
}
