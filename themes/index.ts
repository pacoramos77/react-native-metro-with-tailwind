import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  ThemeBase,
} from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import colors from "./colors.json";

const theme: ThemeBase = {
  ...DefaultTheme,
  version: 3,
  roundness: 1,
  dark: true,
  colors: {
    ...(DefaultTheme.colors as MD3Colors),
    ...(colors as MD3Colors),
  },
} as ThemeBase;

export default theme;
