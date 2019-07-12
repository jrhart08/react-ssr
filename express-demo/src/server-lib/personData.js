const people = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Deer',
    characterClass: 'Bard',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    characterClass: 'Fighter',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: "WHO'S ASKING",
    characterClass: 'Wizard',
  },
];

export const getPeople = () => people;

// eslint-disable-next-line eqeqeq
export const getPerson = id => people.find(person => person.id == id);
