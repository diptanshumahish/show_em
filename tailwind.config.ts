import type { Config } from 'tailwindcss';
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  blocklist: [],
  
  theme: {
    extend: {
      colors: {
        "theme-yellow": "#fdc003",
        "theme-orange": "#ed464d",
        "theme-black": "#111",
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
