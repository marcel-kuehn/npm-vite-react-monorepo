import { defineConfig } from "vite";
import { getBaseConfig } from "./../shared/configs/vite.config.base";

export default defineConfig({
  ...getBaseConfig(__dirname),
});
