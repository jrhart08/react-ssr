import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getAllPeople() {
  return axios
    .get('http://localhost:3000/api/people')
    .then(response => response.data);
}

function Index(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAllPeople().then(setPeople);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Class</th>
          <th />
        </tr>
      </thead>
      {
        people.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.characterClass}</td>
            <td><Link to={`/people/${person.id}`}>Details</Link></td>
          </tr>
        ))
      }
    </table>
  );
}

export default Index;
