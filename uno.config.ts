import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{ts,tsx}"],
  },
  presets: [
    presetUno({
      dark: "media",
    }),
  ],
});
