import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

import FontsExample from "./src/components/fonts-example";
import AssetsProvider from "./src/components/assets-provider";
import { fontStyle } from "./src/utils/fonts";
import MaterialIcon from "./src/components/material-icon";

export default function App() {
  return (
    <AssetsProvider>
      <TailwindProvider>
        <View className="flex-1 items-center justify-center bg-slate-900">
          <StatusBar style="auto" />

          <Text
            className="text-slate-200 mb-10 shadow-inner text-2xl"
            style={fontStyle("sans", "semibold")}
          >
            I'm working with Tailwind CSS in React Native
          </Text>
          <MaterialIcon
            name="admin-panel-settings"
            size={24}
            iconClassName="mb-10"
          />
          <FontsExample />
        </View>
      </TailwindProvider>
    </AssetsProvider>
  );
}
