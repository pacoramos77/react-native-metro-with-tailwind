import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  Avatar,
  Card,
  IconButton,
  Snackbar,
  ThemeBase,
} from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";

const colors: MD3Colors = {
  ...(DefaultTheme.colors as MD3Colors),
  primary: "#3498db",
  secondary: "#f1c40f",
  tertiary: "#51b9c3",
};
const theme: ThemeBase = {
  ...DefaultTheme,
  version: 3,
  roundness: 8,
  dark: false,
  colors,
} as ThemeBase;

export default theme;
