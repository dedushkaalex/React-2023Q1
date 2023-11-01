import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@api', replacement: fileURLToPath(new URL('./src/api/', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets/', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views/', import.meta.url)) },
    ],
  },
});
