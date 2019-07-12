import fetch from 'isomorphic-unfetch';

export default (match) => {
  const { id } = match.params;

  return fetch(`http://localhost:3000/api/people/${id}`)
    .then(response => response.json())
    .then(person => ({ person }));
};
