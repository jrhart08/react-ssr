/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const InfoTitle = styled.h3`
  color: #777;
  text-transform: uppercase;
`;

const InfoValue = styled.h2`
  color: #333;
`;

const InfoSection = ({ title, children }) => (
  <div>
    <InfoTitle>{title}</InfoTitle>
    <InfoValue>{children}</InfoValue>
  </div>
);

export default InfoSection;
