import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { getPerson } from '../../lib/personData';

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

export default () => {
  const { personId } = useRouter().query;

  const person = getPerson(personId);

  let content;
  if (person) {
    content = (
      <>
        <Info title="ID (from route)">{personId}</Info>
        <Info title="First Name">{person.firstName}</Info>
        <Info title="Last Name">{person.lastName}</Info>
        <Info title="Character Class">{person.characterClass}</Info>
        <Link href="/people"><a>Back</a></Link>
      </>
    );
  } else {
    content = <h1>No person found with ID {personId}</h1>
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
};
