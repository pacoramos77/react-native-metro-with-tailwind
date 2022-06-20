import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Avatar,
  Card,
  IconButton,
  Snackbar,
} from "react-native-paper";

import { Button, Badge } from "react-native-paper";

import FontsExample from "./src/components/fonts-example";
import AssetsProvider from "./src/components/assets-provider";
import { fontStyle } from "./src/utils/fonts";
import MaterialIcon from "./src/components/material-icon";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};

export default function App() {
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <AssetsProvider>
      <TailwindProvider>
        <PaperProvider theme={theme}>
          <View className="flex-1 items-center justify-around bg-slate-900">
            <StatusBar style="auto" />
            <Badge>3</Badge>

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
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Press me
            </Button>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {}}
                />
              )}
            />
            <Button onPress={onToggleSnackBar}>
              {visible ? "Hide" : "Show"}
            </Button>
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              action={{
                label: "Undo",
                onPress: () => {
                  // Do something
                },
              }}
            >
              Hey there! I'm a Snackbar.
            </Snackbar>
            <FontsExample />
          </View>
        </PaperProvider>
      </TailwindProvider>
    </AssetsProvider>
  );
}
