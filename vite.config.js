import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Airbnb/', // Change this to match your repository name
  plugins: [react()],
});

