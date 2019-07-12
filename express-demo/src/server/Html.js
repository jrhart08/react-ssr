/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';
import Helm from 'react-helmet';

function Html({ children }) {
  const helmet = Helm.renderStatic();

  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body {...bodyAttrs}>
        <div id="content">
          {children}
        </div>
      </body>
    </html>
  );
}

Html.propTypes = {
  children: PropTypes.node,
};

Html.defaultProps = {
  children: null,
};

export default Html;
