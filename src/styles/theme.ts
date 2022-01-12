import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },

  colors: {
    highlight: {
      "100": "rgba(255, 186, 8)",
      "50": "rgba(255, 186, 8, 0.5)",
    },
    dark: {
      black: "#000000",
      heading: "#47585B",
      info: {
        "100": "rgb(71, 88, 91)",
        "50": "rgba(71, 88, 91, 0.5)",
      },
    },
    light: {
      white: "#FFFFFF",
      heading: "#F5F8FA",
      info: "#DADADA",
    },
  },

  sizes: {
    container: {
      lg: "1160px",
      xl: "1240px",
    },
  },

  styles: {
    global: {
      body: {
        bg: "light.heading",
        color: "dark.heading",
      },
    },
  },
});
