import { recipe } from "@vanilla-extract/recipes";

import * as form from "./form.css";

export const input = recipe({
  base: form.base,

  variants: {
    size: {
      small: {
        fontSize: "0.8rem",
        padding: "0.4rem",
      },
      medium: {
        fontSize: "1rem",
        padding: "0.5rem",
      },
      large: {
        fontSize: "1.125rem",
        padding: "0.5625rem",
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});
