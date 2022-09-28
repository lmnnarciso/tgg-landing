// pages/_app.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

let boxShadow = "0px 0px 5px 1px rgba(253,168,168,0.9)";
let boxShadowGray = "0px 0px 5px 3px rgba(108,112,111,0.9)";

const linearGradient = {
  background: `linear-gradient(0deg, rgba(245,240,240,1) 0%, rgba(253,168,168,1) 100%);`,
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    flame: "#fda8a8",
    aqua: "#b6bee3",
    wind: "#a0cdac",
    terra: "#a0cdac",
    pink: "#febcc9",
    blackGradient:
      "linear-gradient(180deg, rgba(143,139,139,0.2) 0%, rgba(0,0,0,0.5) 29%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)",
    "pink-gradient": `linear-gradient(0deg, rgba(245,240,240,1) 0%, rgba(253,168,168,1) 100%)`,
    purple: "#260532",
    linearGradient: linearGradient,
    pinkShadow: boxShadow,
    grayShadow: boxShadowGray,
  },
};

const theme = extendTheme({
  colors,
  shadows: {
    "pink-shadow": boxShadow,
    "gray-shadow": boxShadowGray,
  },
  fonts: {
    body: `"Comfortaa", cursive `,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
