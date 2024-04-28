"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#15e545b1",
      light: "#7de270",
      dark: "#1a4c02",
      contrastText: "#fff",
    },
    secondary: {
      main: "#de1c1cad",
      light: "#ce1634",
      dark: "#c51414",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h6: {
      fontSize: "50px",
      fontWeight: 500,
      color: "red",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: "40px",
          color: "red",
        },
        h6: {
          fontSize: "100px",
          color: "green",
          fontWeight: 800,
        },
      },
    },
  },
});

export default theme;
