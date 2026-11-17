import type { Config } from "tailwindcss";
export default { darkMode: "class", content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#101826", cyan: "#16b8c7", paper: "#f7f8fa" } } }, plugins: [] } satisfies Config;
