import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import express from 'express';
import { Helmet } from 'react-helmet';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './client/App';
import getLatestBundle from './_getLatestBundle';

const PORT = 3000;
const server = express();

server.use(express.static(__dirname));

server.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const content = renderToString(sheet.collectStyles(<App />));
    const helmet = Helmet.renderStatic();

    const html = `
      <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${sheet.getStyleTags()}
        </head>
        <body>
          ${content}
          <script src="${getLatestBundle()}"></script>
        </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    console.error(err);
  } finally {
    sheet.seal();
  }
});

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}`);
});
