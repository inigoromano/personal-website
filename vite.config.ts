import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const ignoredProjectEntries = new Set(['.git', 'dist', 'node_modules']);

const getLatestProjectUpdate = (directory: string): Date => {
    let latestUpdate = new Date(0);

    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (ignoredProjectEntries.has(entry.name) || entry.name === '.DS_Store') {
        continue;
      }

      const entryPath = path.join(directory, entry.name);
      const stats = fs.statSync(entryPath);

      if (stats.mtime > latestUpdate) {
        latestUpdate = stats.mtime;
      }

      if (entry.isDirectory()) {
        const nestedLatestUpdate = getLatestProjectUpdate(entryPath);

        if (nestedLatestUpdate > latestUpdate) {
          latestUpdate = nestedLatestUpdate;
        }
      }
    }

    return latestUpdate;
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const lastUpdatedIso = getLatestProjectUpdate(__dirname).toISOString();

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        __LAST_UPDATED_ISO__: JSON.stringify(lastUpdatedIso),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
