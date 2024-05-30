import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows external devices to connect
    port: 5173, // or any port of your choice
  },
  plugins: [react()],
});
