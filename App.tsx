import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  Provider as PaperProvider,
  Avatar,
  Card,
  IconButton,
  Snackbar,
} from "react-native-paper";

import { Button, Badge } from "react-native-paper";

import FontsExample from "./src/components/fonts-example";
import AssetsProvider from "./src/components/assets-provider";
import MaterialIcon from "./src/components/material-icon";
import theme from "./themes";

export default function App() {
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <AssetsProvider>
      <TailwindProvider>
        <PaperProvider theme={theme}>
          <View className="flex-1 items-center justify-around bg-background p-2">
            <StatusBar style="auto" />
            <Badge>3</Badge>

            <Text className="mb-10 shadow-inner text-2xl font-sans-300">
              I'm working with Tailwind CSS in React Native
            </Text>

            <MaterialIcon
              name="admin-panel-settings"
              size={24}
              iconClassName="mb-4"
            />
            <View className="flex flex-row flex-wrap gap-4">
              <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log("Pressed")}
              >
                "contained"
              </Button>
              <Button
                icon="camera"
                mode="text"
                onPress={() => console.log("Pressed")}
              >
                "text"
              </Button>
              <Button
                icon="camera"
                mode="outlined"
                onPress={() => console.log("Pressed")}
              >
                "outlined"
              </Button>
              <Button
                icon="camera"
                mode="elevated"
                onPress={() => console.log("Pressed")}
              >
                "elevated"
              </Button>

              <Button
                icon="camera"
                mode="contained-tonal"
                onPress={() => console.log("Pressed")}
              >
                "contained-tonal"
              </Button>
            </View>
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
            <FontsExample />
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
          </View>
        </PaperProvider>
      </TailwindProvider>
    </AssetsProvider>
  );
}
