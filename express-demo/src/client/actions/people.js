import fetch from 'isomorphic-unfetch';
import { GET_PEOPLE } from './types';

const peopleFetched = people => ({
  type: GET_PEOPLE,
  people,
});

export const getAllPeople = () => dispatch =>
  fetch('http://localhost:3000/api/people')
    .then(response => response.json())
    .then(people => dispatch(peopleFetched(people)));

export const getPerson = personId => dispatch =>
  fetch(`http://localhost:3000/api/people/${personId}`)
    .then(response => response.json())
    .then(person => dispatch(peopleFetched([person])));
