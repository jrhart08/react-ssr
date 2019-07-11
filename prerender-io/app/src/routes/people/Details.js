import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getPersonDetails(personId) {
  return axios
    .get(`http://localhost:3000/api/people/${personId}`)
    .then(response => response.data);
}

function Details(props) {
  const [person, setPerson] = useState({
    firstName: '???',
    lastName: '!!!',
    characterClass: 'Ranger',
  });

  useEffect(() => {
    getPersonDetails(props.match.params.id).then(setPerson);
  }, []);

  return (
    <dl>
      <dt>First Name</dt>
      <dd>{person.firstName}</dd>

      <dt>Last Name</dt>
      <dd>{person.lastName}</dd>

      <dt>Character Class</dt>
      <dd>{person.characterClass}</dd>
    </dl>
  );
}

export default Details;
