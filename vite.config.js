import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@components", replacement: "/src/components" },
            { find: "@layouts", replacement: "/src/layouts" },
            { find: "@articles", replacement: "/src/articles" },
            { find: "@styles", replacement: "/src/styles" },
            { find: "@utils", replacement: "/src/utils" },
            { find: "@db", replacement: "/src/db" },
        ],
    }
});
