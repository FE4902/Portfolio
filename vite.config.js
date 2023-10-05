import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@components", replacement: "./components" },
            { find: "@layouts", replacement: "./layouts" },
            { find: "@articles", replacement: "./articles" },
        ],
    },
});
