import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
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
)

const Person = ({ person }) => (
  <Layout>
    <Info title="First Name">{person.firstName}</Info>
    <Info title="Last Name">{person.lastName}</Info>
    <Info title="Character Class">{person.characterClass}</Info>
    <Link href="/people"><a>Back</a></Link>
  </Layout>
);

// Next.js checks for this server-side.
// When clicking on a <Link />, it will call this function again
// (and render the component for that link's route) client-side
// instead of getting a whole new page from the server.
Person.getInitialProps = async(context) => {
  const { personId } = context.query;

  const response = await fetch(`http://localhost:3000/api/people/${personId}`);

  const person = await response.json();
  console.log(`person: ${JSON.stringify(person)}`);

  return { person };
};

export default Person;
