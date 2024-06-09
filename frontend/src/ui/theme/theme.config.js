const customTheme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1240px",
    xl: "1580px",
    "2xl": "1536px",
  },
  addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
  defaultTheme: "light", // default theme from the themes object
  defaultExtendTheme: "light", // default theme to extend on custom themes
  themes: {
    layout: {
      hoverOpacity: 0.8,
      boxShadow: {},
      dividerWeight: "1px",
      disabledOpacity: 0.5,
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.125rem",
      },
      padding: {
        screen_large: "80px 15px",
      },
      lineHeight: {
        tiny: "1rem",
        small: "1.25rem",
        medium: "1.5rem",
        large: "1.75rem",
      },
      radius: {
        small: "8px",
        medium: "12px",
        large: "14px",
      },
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "3px",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      green: {
        green_50: "#EDEEC9",
        green_100: "#DDE7C7",
        green_200: "#BFD8BD",
        green_300: "#98C9A3",
        green_400: "#77BFA3",
      },
      Zinc: {
        50: "#FAFAFA",
        100: "#F4F4F5",
        200: "#E4E4E7",
        300: "#D4D4D8",
        400: "#A1A1AA",
        500: "#71717A",
        600: "#52525B",
        700: "#3F3F46",
        800: "#27272A",
        900: "#18181B",
      },
    }, // light theme colors
  },
};

export default customTheme;
