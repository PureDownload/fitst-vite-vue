import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// element-plus 按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 创建别名
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 全局变量文件
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/scss/mixin.scss";',
      },
    },
  },
});
