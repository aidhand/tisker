import { sprinkles } from "@/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

import { flexbox } from "@/components/ui/flexbox.css";
import * as layout from "@/styles/layout.css";

export const head = style([
  flexbox,
  sprinkles({
    marginY: "8",
    gap: "8",
  }),
]);

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
});

export const descriptor = style({});

export const aside = style([
  flexbox,
  {
    textAlign: "right",
  },
]);

export const seperator = style([
  // TODO: Move seperator to own UI component
  layout.seperator,
  sprinkles({
    marginY: "8",
  }),
]);

export const body = style([
  flexbox,
  {
    flexWrap: "wrap",
    flexDirection: "column",
  },
  sprinkles({
    marginY: "8",
    gap: "8",
  }),
]);
