import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const Table = styled.table`
  border-color: blue;
  font-family: comic sans-serif;
`;

const TableHead = () => (
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Character Class</th>
      <th>Details</th>
    </tr>
  </thead>
);

const PersonRow = person => (
  <tr key={person.id}>
    <td>{person.firstName}</td>
    <td>{person.lastName}</td>
    <td>{person.characterClass}</td>
    <td>
      <Link to={`/people/${person.id}`}>
        Details
      </Link>
    </td>
  </tr>
);

const People = ({ people }) => (
  <Layout>
    <Table>
      <TableHead />
      <tbody>
        {people.map(PersonRow)}
      </tbody>
    </Table>
  </Layout>
);

People.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
};

People.defaultProps = {
  people: [],
};

export default People;
