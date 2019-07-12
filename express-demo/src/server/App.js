import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Test = styled.h1`
  color: #789;
`;

export default () => (
  <div>
    <Helmet>
      <title>Hello World Page</title>
    </Helmet>
    <Test>Hello World!</Test>
  </div>
);
