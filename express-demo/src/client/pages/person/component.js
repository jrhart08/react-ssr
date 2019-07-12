/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const InfoTitle = styled.h3`
  color: #777;
  text-transform: uppercase;
`;

const InfoValue = styled.h2`
  color: #333;
`;

const Info = ({ title, children }) => (
  <>
    <InfoTitle>{title}</InfoTitle>
    <InfoValue>{children}</InfoValue>
  </>
);

const Person = ({ person }) => (
  <Layout>
    <Info title="First Name">{person.firstName}</Info>
    <Info title="Last Name">{person.lastName}</Info>
    <Info title="Character Class">{person.characterClass}</Info>
    <Link to="/people">Back</Link>
  </Layout>
);

Person.propTypes = {
  person: PropTypes.object,
};

Person.defaultProps = {
  person: {},
};

export default Person;
