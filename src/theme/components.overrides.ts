import variables from "./variables";

const componentOverrideConfigs = {
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        fontSize: "1.25rem",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      size: "small",
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        margin: 0,
        padding: "6px 17px",
        ":not([disabled])": {
          "&.MuiButton-textPrimary": {
            border: `solid 2px ${variables.primary.main}`,
          },
        },
        borderRadius: 4,
        textTransform: "capitalize",
        "&.MuiButton-textPrimary": {
          "&:hover": {
            backgroundColor: variables.primary.light,
            color: variables.white,
          },
        },
      },
      sizeLarge: {
        padding: "15px 20px",
      },
      outlined: {
        padding: "5px 16px",
        "&:hover": {
          color: variables.white,
          background: variables.primary.main,
        },
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: {},
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        marginBottom: "16px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${variables.primary.superLight}`,
        },
        "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: `${variables.primary.superLight} !important`,
          },
        "&.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: `${variables.error} !important`,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        border: `1px solid ${variables.lineColor}`,
      },
    },
  },
  MuiTouchRipple: {
    styleOverrides: {
      child: {
        backgroundColor: variables.white,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      body1: {
        fontSize: "1rem",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      maxWidthLg: {
        "@media (min-width: 1024px)": {
          maxWidth: "calc(1120px + 48px)",
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      standardInfo: {
        backgroundColor: "#d0e3fb",
        color: "#2f5876",
        "& svg": {
          color: "#2f5876",
        },
      },
    },
  },
};

export default componentOverrideConfigs;
