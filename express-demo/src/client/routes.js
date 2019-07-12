import people from './pages/people';
import person from './pages/person';
import helloWorld from './pages/hello-world';

export default [
  {
    path: '/hello-world',
    ...helloWorld,
  },
  {
    path: '/people',
    ...people,
  },
  {
    path: '/people/:id',
    ...person,
  },
];
