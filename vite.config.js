import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.BASE_URL": JSON.stringify(env.BASE_URL),
      "process.env.API_VERSION": JSON.stringify(env.API_VERSION),
      "process.env.SECRET_ENCRYPTION_KEY": JSON.stringify(
        env.SECRET_ENCRYPTION_KEY
      ),
      "process.env.PAYMENT_KEY": JSON.stringify(env.PAYMENT_KEY),
    },
    plugins: [react(), tailwindcss()],
  };
});
