import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

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
      <Link
        href="/person/[personId]"   // internal route (in `pages`)
        as={`/person/${person.id}`} // external route (what the browser sees)
      >
        <a>Details</a>
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

// Next.js checks for this server-side
People.getInitialProps = async() => {
  const response = await fetch('http://localhost:3000/api/people');

  const people = await response.json();

  return { people };
};

export default People;
