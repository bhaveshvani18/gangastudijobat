import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: {
          black: "#0a0a0a",
          DEFAULT: "#0a0a0a",
        },
        deep: {
          black: "#111111",
          DEFAULT: "#111111",
        },
        charcoal: "#1a1a1a",
        cinematic: {
          red: "#c41e3a",
          "red-dark": "#8b0000",
          gold: "#d4af37",
          champagne: "#f7e7ce",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a0a0a0",
          muted: "#666666",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["3.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        h2: ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }],
      },
      spacing: {
        section: "120px",
        "section-mobile": "80px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-cinematic": "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.8) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;