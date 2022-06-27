import React from "react";
import useAppFontsLoader from "../hooks/app-font-loader";

// TODO: https://docs.expo.dev/guides/preloading-and-caching-assets/

const AssetsProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [fontsLoaded] = useAppFontsLoader();
  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default AssetsProvider;
