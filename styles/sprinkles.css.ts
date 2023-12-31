import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const spacing = {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "4": "1rem",
  "6": "1.5rem",
  "8": "2rem",
  "12": "3rem",
  "16": "4rem",
};

const spacingProperties = defineProperties({
  properties: {
    gap: spacing,
    margin: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    padding: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    letterSpacing: {
      normal: "0",
      tight: "-0.025rem",
      tighter: "-0.05rem",
    },
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const colors = {
  "white": "#fff",
  "black": "#000",
  "red": "#f00",
  "blue": "#00f",
  "green": "#0f0",
  "grey-0": "#fff",
  "grey-50": "#fafafa",
  "grey-100": "#f4f4f5",
  "grey-200": "#e4e4e7",
  "grey-300": "#d4d4d8",
  "grey-400": "#a1a1aa",
  "grey-500": "#71717a",
  "grey-600": "#52525b",
  "grey-700": "#3f3f46",
  "grey-800": "#27272a",
  "grey-900": "#18181b",
  "grey-950": "#09090b",
  "grey-1000": "#000",
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
  },
});

export const sprinkles = createSprinkles(spacingProperties, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
