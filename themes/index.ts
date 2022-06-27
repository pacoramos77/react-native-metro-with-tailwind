import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { MD3Colors } from "react-native-paper/lib/typescript/types";
import colors from "./colors.json";

type AppTheme = {
  isV3: true;
  version: 3;
  roundness: number;
  dark: boolean;
  colors: MD3Colors;
};

const theme: AppTheme = {
  ...DefaultTheme,
  version: 3,
  roundness: 1,
  dark: true,
  colors: {
    ...(DefaultTheme.colors as MD3Colors),
    ...(colors as MD3Colors),
  },
} as AppTheme;

export default theme;
