import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Fonts from "./src/components/fonts";
import { fontStyle } from "./src/utils/fonts";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-slate-900">
        <StatusBar style="auto" />
        <Text className="text-slate-200 mb-10" style={fontStyle("sans")}>
          I'm working with Tailwind CSS in React Native
        </Text>
        <Fonts />
      </View>
    </TailwindProvider>
  );
}
