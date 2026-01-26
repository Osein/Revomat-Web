import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/revomat-web',
  define: {
    'process.env.NODE_ENV': '"development"',
    'process.env.TAMAGUI_TARGET': '"web"',
    'process.env': '{}',
  },
  build: {
    outDir: '../../dist/apps/revomat-web',
    reportCompressedSize: true,
  },
  server: {
    port: 3000,
    host: 'localhost',
  },
  preview: {
    port: 4000,
    host: 'localhost',
  },
  plugins: [react(), nxViteTsPaths()],
});

