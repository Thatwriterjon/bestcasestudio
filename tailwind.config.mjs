/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
        grotesk: ["Nohemi", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        pink: "var(--pink)",
        yellow: "var(--yellow)",
        black: "var(--black)",
        dark: "var(--dark)",
        gray: "var(--gray)",
        white: "var(--white)",
        bg: "var(--bg)",
      },
    },
  },
  plugins: [],
};
