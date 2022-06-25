import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./screens/home-screen";
import SettingsScreen from "./screens/settings-screen";
import MaterialIcon, { MaterialIconsType } from "./components/material-icon";
import theme from "../themes";

type ScreenDefinition = Record<
  string,
  {
    title: string;
    iconName: MaterialIconsType;
  }
>;

const Tab = createBottomTabNavigator();
const SCREEN_DEFINITIONS: ScreenDefinition = {
  Home: {
    title: "Home",
    iconName: "home-filled",
  },
  Settings: {
    title: "Settings",
    iconName: "settings",
  },
};

export const Root = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            const { iconName } = SCREEN_DEFINITIONS[route.name];

            return (
              <MaterialIcon
                name={iconName}
                size={size}
                className={`p-1 rounded-lg ${
                  focused
                    ? "bg-primary text-onPrimary"
                    : "bg-background text-onBackground"
                }`}
              />
            );
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
