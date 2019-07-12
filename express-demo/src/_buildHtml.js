import path from 'path';
import fs from 'fs';

const getLatestBundle = () => {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  return manifest['main.js'];
};

export default ({ helmet, styleTags, content }) => `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${styleTags}
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
      <script src="${getLatestBundle()}"></script>
    </body>
  </html>
`;
