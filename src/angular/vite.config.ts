import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        `,
      },
    },
  },
  define: {
    'process.env': process.env
  }
});