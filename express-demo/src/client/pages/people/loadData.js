import fetch from 'isomorphic-unfetch';

export default () => fetch('http://localhost:3000/api/people')
  .then(response => response.json())
  .then(people => ({ people }));
