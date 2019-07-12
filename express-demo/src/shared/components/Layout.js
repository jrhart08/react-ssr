import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Layout = ({ children, ...rest }) => (
  <Content {...rest}>
    {/* header */}
    {/* sidebar */}
    {children}
    {/* footer */}
  </Content>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
