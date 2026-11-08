// Configure Vite for local development and for the repository path on GitHub Pages.
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: repositoryName ? `/${repositoryName}/` : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        controller: resolve(projectRoot, 'controller.html')
      }
    }
  },
  server: {
    host: '0.0.0.0',
    watch: {
      ignored: ['**/public/models/**', '**/public/draco/**', '**/src/third-party/cfm56/**']
    }
  }
});
