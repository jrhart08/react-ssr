import path from 'path';
import fs from 'fs';

export default () => {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  return manifest['main.js'];
};
