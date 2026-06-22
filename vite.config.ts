import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you deploy to https://<username>.github.io/<repo-name>/ (a project page),
// set base to '/<repo-name>/'. If you deploy to a custom domain or to
// https://<username>.github.io/ (a user/org page), leave it as '/'.
const REPO_NAME = 'fieldlog';
const USE_CUSTOM_DOMAIN = false;

export default defineConfig({
  plugins: [react()],
  base: USE_CUSTOM_DOMAIN ? '/' : `/${REPO_NAME}/`,
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
