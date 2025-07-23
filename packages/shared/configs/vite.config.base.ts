import react from "@vitejs/plugin-react";
import path from "path";

export const getBaseConfig = (__dirname: string) => ({
  plugins: [react()],
  server: {
    fs: {
      allow: ["../shared", "./src"],
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../shared"),
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
