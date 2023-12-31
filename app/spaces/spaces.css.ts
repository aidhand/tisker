import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

import { flexbox } from "@/components/ui/flexbox.css";

export const list = {
  grid: style([
    {
      display: "grid",
      gridAutoFlow: "dense",
      gridAutoRows: "minmax(max-content, 1fr)",
      gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))",
    },
    sprinkles({
      gap: "4",
    }),
  ]),
};

export const item = {
  card: sprinkles({
    padding: "4",

    background: {
      lightMode: "grey-200",
      darkMode: "grey-900",
    },
  }),

  head: flexbox,

  name: style({
    fontSize: "1.25rem",
    fontWeight: "medium",
  }),

  tags: style({}),

  tag: sprinkles({
    marginLeft: "2",
    padding: "2",

    background: {
      lightMode: "grey-300",
      darkMode: "grey-800",
    },
  }),
};
