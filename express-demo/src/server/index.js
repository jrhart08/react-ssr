import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import express from 'express';
import path from 'path';
import fs from 'fs';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import Html from './Html';
import App from './App';

const PORT = 3000;
const server = express();

server.use(express.static(__dirname));

server.get('*', (req, res) => {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');
  console.log(`__dirname: ${__dirname}`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const latestBundle = manifest['main.js'];

  console.log(`latestBundle: ${latestBundle}`);

  const sheet = new ServerStyleSheet();

  try {
    const html = renderToString((
      <Html>
        <StyleSheetManager sheet={sheet.instance}>
          <App />
        </StyleSheetManager>
        <>
          {sheet.getStyleElement()}
          <script src={latestBundle} />
        </>
      </Html>
    ));


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
