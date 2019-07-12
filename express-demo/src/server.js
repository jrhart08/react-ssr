/* eslint-disable no-console */
import express from 'express';
import servePage from './_servePage';
import { getPeople, getPerson } from './server-lib/personData';

const PORT = 3000;
const server = express();

// public content
server.use(express.static(__dirname));

// api
server.get('/api/people', (req, res) => {
  res.send(getPeople());
});

server.get('/api/people/:id', (req, res) => {
  const person = getPerson(req.params.id);

  if (person) {
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

// page server
server.get('*', servePage);

// start server
server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}`);
});
