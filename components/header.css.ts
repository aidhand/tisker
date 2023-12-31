import { style } from "@vanilla-extract/css";

import { flexbox } from "@/components/ui/flexbox.css";
import * as form from "@/components/ui/form.css";

export const header = style({
  padding: "0.5rem 1rem",
});

export const container = flexbox;
export const section = flexbox;

export const logo = style({
  width: "2rem",
  height: "2rem",
});

export const create = {
  container: style({}),
  button: style([form.base]),
};

export const search = {
  container: style({}),
  input: style([form.base]),
};
