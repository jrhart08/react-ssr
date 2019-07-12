/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import path from 'path';
import fs from 'fs';
import App from './shared/App';
import routes from './shared/routes';
import configureStore from './shared/store/configureStore';

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

  // setting window.__INITIAL_REDUX_STATE__ allows
  // client to pick up where we left off
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

// server.get('*', () => {...});
export default (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};

  const store = configureStore();

  // Fetch any data necessary.
  // Dispatching through redux so we can pass the
  // resulting state to the client for initialization.
  const dataRequirements = routes
    // to tuples
    .map(route => [route.loadData, matchPath(req.path, route.path)])
    // ensure (a) this is the matching route and (b) there's data to load
    .filter(([loadData, match]) => loadData && match)
    // load data
    .map(([loadData, match]) => store.dispatch(loadData(match)));

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
