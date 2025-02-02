import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--text-color)",
        secondaryTextColor: "var(--secondary-text-color)", 
        purple: "var(--purple)",
        purpleDark: "var(--purple-dark)",
        whiteColor: "var(--white-color)",
        iconColor: "var(--icon-color)"
      },
      fontSize: {
        'h1': '2rem',
        'xxl': '2.75rem',
        'huge': '5rem',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "visible",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          }
        },
        deleting: {
          "0%": {
            width: "100%",
          },
          "100%": {
            width: "0%",
          }
        },
      },
      animation: {
        typing: "typing 2s steps(20), blink 0.75s step-end infinite",
        deleting: "deleting 1s steps(20) 1s forwards"
      },
    }
  },
  plugins: [],
} satisfies Config;