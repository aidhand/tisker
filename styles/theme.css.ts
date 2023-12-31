import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    background: null,
    foreground: null,
  },
  font: {
    body: null,
    headings: null,
    mono: null,
  },
  space: {
    small: null,
    large: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: "blue",
    background: "white",
    foreground: "black",
  },
  font: {
    body: "arial",
    headings: "arial",
    mono: "monospace",
  },
  space: {
    small: "1rem",
    large: "2rem",
  },
});
