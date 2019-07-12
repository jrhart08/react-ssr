/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Info from '../../components/InfoSection';

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
