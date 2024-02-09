import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            colors: {
                primary: "#474FFF",
                secondary: "#F3B516",
                ascent: "#FF6E6E",
                gray: { custom: "#F6F6F6" },
            },
            flex: {
                "2": "1.5 2 0%",
            },
            backgroundImage: {
                hero: "url('/assets/images/hero.png')",
            },
        },
    },
    plugins: [],
};
export default config;
