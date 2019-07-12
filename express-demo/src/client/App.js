import React from 'react';
import Helmet from 'react-helmet';
import H1 from './components/H1';

export default () => (
  <div>
    <Helmet>
      <title>Hello World Page</title>
    </Helmet>
    <H1>Hello World!</H1>
  </div>
);
