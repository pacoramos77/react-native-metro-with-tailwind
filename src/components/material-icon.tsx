import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styled } from "tailwindcss-react-native";

/**
 * https://icons.expo.fyi/
 */

export type MaterialIconsType = keyof typeof MaterialIcons.glyphMap;

export default styled(MaterialIcons);
