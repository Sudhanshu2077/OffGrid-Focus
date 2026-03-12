import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets so the app works on GitHub Pages
  // regardless of the repository name (sub-folder mapping).
  base: './',
});
