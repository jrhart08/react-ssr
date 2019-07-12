/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';
import App from './client/App';
import buildHtml from './_buildHtml';

export default (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};

  try {
    /* eslint-disable comma-dangle */
    const content = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    ));
    /* eslint-enable comma-dangle */

    // needs to come after `renderToString`.
    // title, meta, link attributes will be whatever
    // the last-rendered component (typically the
    // page for the requested route) set them as.
    const helmet = Helmet.renderStatic();

    // needs to come after `sheet.collectStyles()`
    // This (obviously) gets the rendered style tags,
    // and the { ssr: true } option in .babelrc ensures
    // that the client/server instances of styled-components
    // both use the same className hashes.
    const styleTags = sheet.getStyleTags();

    res.send(buildHtml({ helmet, content, styleTags }));
    // if (context.url) {
    //   // Somewhere a `<Redirect>` was rendered
    //   console.log(`redirecting to ${context.url}`);
    //   res.redirect(context.url);
    // } else {
    // }
  } catch (err) {
    console.error(err);
  } finally {
    sheet.seal();
  }
};
