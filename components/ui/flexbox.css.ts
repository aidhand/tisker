import { style } from "@vanilla-extract/css";

export const flexbox = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "space-between",
});

// export const flexbox = recipe({
//   base: {
//     display: "flex",
//   },

//   variants: {
//     gap: {
//       small: "0.5rem",
//       medium: "1rem",
//       large: "2rem",
//     },
//     wrap: {},
//     direction: {},
//     justifyContent: {},
//     justifyItems: {},
//     alignContent: {},
//     alignItems: {},
//   },

//   defaultVariants: {
//     gap: "4",
//     wrap: "nowrap",
//     direction: "row",
//     justifyContent: "flex-start",
//     justifyItems: "stretch",
//     alignContent: "stretch",
//     alignItems: "stretch",
//   },
// });
