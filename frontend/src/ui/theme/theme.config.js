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
      boxShadows: {
        bs_50:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        bs_100:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.125rem",
      },
      padding: {
        screen_large: "40px 10px",
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
      default: {
        default_50: "#EDEEC9",
        default_100: "#ffe4c2",
        // green_200: "#BFD8BD",
        // green_300: "#98C9A3",
        // green_400: "#77BFA3",
        // green_100: "#DDE7C7",#ffe4c2
        // green_200: "#BFD8BD",
        // green_300: "#98C9A3",
        // green_400: "#77BFA3",
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
