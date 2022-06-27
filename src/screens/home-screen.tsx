import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Badge,
  Card,
  Avatar,
  IconButton,
  Snackbar,
  Button,
} from "react-native-paper";
import theme from "../../themes";
import MaterialIcon from "../components/material-icon";

export const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <View className="flex-1 items-center justify-around bg-background p-2">
      <Badge>3</Badge>

      <Text className="mb-10 shadow-inner text-2xl font-sans-300">
        I'm working with Tailwind CSS in React Native
      </Text>

      <MaterialIcon
        name="admin-panel-settings"
        size={24}
        className="mb-4 bg-secondary text-onSecondary rounded-full p-2"
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
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Button onPress={onToggleSnackBar}>{visible ? "Hide" : "Show"}</Button>
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
  );
};
