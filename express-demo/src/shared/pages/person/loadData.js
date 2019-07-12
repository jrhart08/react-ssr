// import fetch from 'isomorphic-unfetch';
import { getPerson } from '../../actions/people';

export default (match) => {
  const { id } = match.params;

  // redux thunk
  return getPerson(id);

  // return fetch(`http://localhost:3000/api/people/${id}`)
  //   .then(response => response.json())
  //   .then(person => ({ person }));
};
