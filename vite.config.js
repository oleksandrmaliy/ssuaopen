import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.MOV'],
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
  },
});
