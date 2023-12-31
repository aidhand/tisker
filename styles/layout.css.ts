import { sprinkles } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const body = style([
  sprinkles({
    color: {
      lightMode: "grey-950",
      darkMode: "grey-0",
    },

    background: {
      lightMode: "grey-0",
      darkMode: "grey-950",
    },
  }),
]);

export const container = style([
  {
    margin: "0 auto",
    maxWidth: "90rem",
  },
  sprinkles({
    paddingX: "4",
  }),
]);

export const seperator = style([
  {
    border: "1px 0 0 0",
  },

  sprinkles({
    marginY: "4",

    borderColor: {
      lightMode: "grey-400",
      darkMode: "grey-600",
    },
  }),
]);
