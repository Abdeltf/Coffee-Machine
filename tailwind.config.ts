import type { Config } from "tailwindcss";

const config: Config = {
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
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    500: '#f97316', // Orange-500 equivalent for brand orange
                    600: '#ea580c',
                    700: '#c2410c',
                },
                brand: {
                    brown: '#2A1810',  // Deep dark coffee brown
                    orange: '#E65100', // Vibrant burnt orange
                    gold: '#FFB300',   // Accent gold
                    cream: '#fdfbf7',  // Flyer background cream
                },
                coffee: {
                    100: '#f5e6ca',
                    800: '#3b2f2f',
                }
            },
            fontFamily: {
                script: ['var(--font-script)'],
            },
        },
    },
    plugins: [],
};
export default config;
