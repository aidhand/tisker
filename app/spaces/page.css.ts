import { flexbox } from "@/components/ui/flexbox.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  flexbox,
  sprinkles({
    padding: "2",
  }),
]);

export const head = {
  title: style({
    fontSize: "2rem",
    fontWeight: "bold",
  }),
  description: style({}),
};

export const seperator = sprinkles({
  marginY: "8",
  borderColor: {
    lightMode: "grey-300",
    darkMode: "grey-700",
  },
});

export const list = style([
  sprinkles({
    gap: "4",
  }),
  {
    width: "100%",
    display: "grid",
    gridAutoRows: "minmax(max-content, 1fr)",
    gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))",
  },
]);

export const item = style([
  sprinkles({
    background: {
      lightMode: "grey-200",
      darkMode: "grey-800",
    },
  }),
]);

export const itemHead = style([]);
