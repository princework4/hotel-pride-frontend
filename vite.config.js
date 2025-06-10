import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.VITE_BASE_URL": JSON.stringify(env.VITE_BASE_URL),
      "process.env.VITE_API_VERSION": JSON.stringify(env.VITE_API_VERSION),
      "process.env.SECRET_ENCRYPTION_KEY": JSON.stringify(
        env.SECRET_ENCRYPTION_KEY
      ),
      "process.env.VITE_PAYMENT_KEY": JSON.stringify(env.VITE_PAYMENT_KEY),
    },
    plugins: [react(), tailwindcss()],
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes("node_modules")) {
    //           return id
    //             .toString()
    //             .split("node_modules/")[1]
    //             .split("/")[0]
    //             .toString();
    //         }
    //       },
    //     },
    //   },
    // },
  };
});
