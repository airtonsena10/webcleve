import { theme } from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  
 
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: ".300rem",
    md: ".5rem",
  },
  fontSizes: {
    ...theme.fontSizes,
    full: "100%"
    
  },
  colors: {
    ...theme.colors,
    white: "#2D3748",
    purple: {
      ...theme.colors.purple,
      100: "#EDF2F7",
    },
    gray: {
      ...theme.colors.gray,
      200: "#dadada",
      700: "#202024",
      100: "#EDF2F7",
    },
  },

  
};

export default customTheme;
