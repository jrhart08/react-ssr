const express = require('express');
const { getPeople, getPerson } = require('./personData.js');

const api = express();

api.get('/api/people', (req, res) => {
  res.json(getPeople());
});

api.get('/api/people/:id', (req, res) => {
  const person = getPerson(req.params.id);

  if (person) {
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

api.listen(5678, () => console.log('listening on port 5678'));
