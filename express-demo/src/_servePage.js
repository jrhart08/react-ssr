/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import path from 'path';
import fs from 'fs';
import App from './client/App';
import routes from './client/routes';
import configureStore from './client/store/configureStore';

function getLatestBundle() {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  return manifest['main.js'];
}

function buildHtml({ sheet, content, store }) {
  // needs to come after `renderToString`.
  const helmet = Helmet.renderStatic();

  // needs to come after `sheet.collectStyles()`
  const styleTags = sheet.getStyleTags();

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
        <script>
          window.__INITIAL_REDUX_STATE__ = ${JSON.stringify(store.getState())};
        </script>
        <script src="${getLatestBundle()}"></script>
      </body>
    </html>
  `;
}

export default (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};

  const store = configureStore();

  // fetch any data necessary
  const dataRequirements = routes
    .filter(route => matchPath(req.path, route))
    .map(route => route.loadData)
    .filter(loadData => loadData)
    .map(loadData => store.dispatch(loadData()));

  Promise.all(dataRequirements).then(() => {
    try {
      const content = renderToString(sheet.collectStyles((
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )));

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        console.log(`redirecting to ${context.url}`);
        res.redirect(context.url);
      } else {
        res.send(buildHtml({ content, sheet, store }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      // garbage collection
      sheet.seal();
    }
  });
};
