import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        popup: resolve(__dirname,"src/popup.ts"),
      },
      output: {
        entryFileNames: chunkInfo => {
          return `${chunkInfo.name}.js`
        }
      },
    },
  }
});