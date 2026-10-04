import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hanken)"],
        display: ["var(--font-fraunces)"],
        heading: ["var(--font-fraunces)"],
        hanken: ["var(--font-hanken)"],
      },
    },
  },
} satisfies Config;
