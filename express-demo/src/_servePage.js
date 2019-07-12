/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';
import path from 'path';
import fs from 'fs';
import App from './client/App';

function getLatestBundle() {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  return manifest['main.js'];
}

function buildHtml({ helmet, styleTags, content }) {
  return `
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
}

export default (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};

  try {
    const content = renderToString(sheet.collectStyles((
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )));

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      console.log(`redirecting to ${context.url}`);
      res.redirect(context.url);
    } else {
      // needs to come after `renderToString`.
      const helmet = Helmet.renderStatic();

      // needs to come after `sheet.collectStyles()`
      const styleTags = sheet.getStyleTags();

      res.send(buildHtml({ helmet, content, styleTags }));
    }
  } catch (err) {
    console.error(err);
  } finally {
    sheet.seal();
  }
};
