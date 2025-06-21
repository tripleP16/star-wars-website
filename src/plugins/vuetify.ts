// src/plugins/vuetify.js
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: "#00BFFF",

          secondary: "#FF3333",

          accent: "#FF6B35",

          error: "#DC143C",
          info: "#4FC3F7",
          success: "#00FF7F",
          warning: "#FFD700",

          // Dark backgrounds
          background: "#0B0B0F",
          surface: "#1E1E24",

          "on-background": "#E0E0E0",
          "on-surface": "#FFFFFF",
          "on-primary": "#000000",
          "on-secondary": "#FFFFFF",
        },
      },
    },
  },
});
