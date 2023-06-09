// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/HomeNote/Desktop/VScode%20project/hd-booth/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/HomeNote/Desktop/VScode%20project/hd-booth/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3,
    watch: {
      usePolling: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvSG9tZU5vdGUvRGVza3RvcC9WU2NvZGUgcHJvamVjdC9oZC1ib290aFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL0hvbWVOb3RlL0Rlc2t0b3AvVlNjb2RlIHByb2plY3QvaGQtYm9vdGgvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL0hvbWVOb3RlL0Rlc2t0b3AvVlNjb2RlJTIwcHJvamVjdC9oZC1ib290aC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtyZWFjdCgpXSxcblx0c2VydmVyOiB7XG5cdFx0cG9ydDogMzAwMCxcblx0XHR3YXRjaDoge1xuXHRcdFx0dXNlUG9sbGluZzogdHJ1ZSxcblx0XHR9LFxuXHRcdHByb3h5OiB7XG5cdFx0XHQnL2FwaSc6IHtcblx0XHRcdFx0dGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyxcblx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxuXHRcdFx0XHRzZWN1cmU6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1WLFNBQVMsb0JBQW9CO0FBQ2hYLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ04sWUFBWTtBQUFBLElBQ2I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNUO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
