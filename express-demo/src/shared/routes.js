import people from './pages/people';
import person from './pages/person';
import helloWorld from './pages/hello-world';

export default [
  {
    path: '/hello-world',
    exact: true,
    ...helloWorld,
  },
  {
    path: '/people',
    exact: true,
    ...people,
  },
  {
    path: '/people/:id',
    ...person,
  },
];
