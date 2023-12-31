import { sprinkles } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const base = style([
  {
    padding: "0.5rem",
    fontSize: "1rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "0.25rem",
    outline: "none",
  },

  sprinkles({
    color: {
      lightMode: "black",
      darkMode: "white",
    },

    background: {
      lightMode: "grey-100",
      darkMode: "grey-900",
    },

    borderColor: {
      lightMode: "grey-300",
      darkMode: "grey-700",
    },
  }),
]);
