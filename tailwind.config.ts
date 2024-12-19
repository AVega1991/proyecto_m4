import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3c4245",
        secondary: "#5f6769",
        tertiary: "#680747",
        fourth: "#141010",
        warning: "#ff0000",
      },
    },
  },
  plugins: [],
} satisfies Config;
