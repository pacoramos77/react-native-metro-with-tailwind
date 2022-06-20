export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
export type FontWeightNumbers =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export const fontWeightAlias: Record<FontWeight, FontWeightNumbers> = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export type FontFamily = "sans";

export const FONTS: Record<FontFamily, Record<number, string>> = {
  sans: {
    100: "Inter_100Thin",
    200: "Inter_200ExtraLight",
    300: "Inter_300Light",
    400: "Inter_400Regular",
    500: "Inter_500Medium",
    600: "Inter_600SemiBold",
    700: "Inter_700Bold",
    800: "Inter_800ExtraBold",
    900: "Inter_900Black",
  },
};

export function fontStyle(
  font: FontFamily = "sans",
  weight: FontWeight | FontWeightNumbers = "normal"
): { fontFamily: string } {
  let fontFamily =
    FONTS[font ?? "sans"][
      Number.isInteger(weight)
        ? (weight as FontWeightNumbers)
        : fontWeightAlias[weight as FontWeight] ?? fontWeightAlias["normal"]
    ];
  return { fontFamily };
}
