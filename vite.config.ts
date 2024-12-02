import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitestConfig from './vitest.config';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.ttf'],
  server: {
    port: 3000,
    open: 'http://localhost:3000',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
// export default mergeConfig(
//   vitestConfig,
//   defineConfig({
//     plugins: [react()],
//     assetsInclude: ['**/*.ttf'],
//     server: {
//       port: 3000,
//       open: 'http://localhost:3000',
//     },

//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//   })
// );
