const express = require('express')
const next = require('next')
const { getPerson, getPeople } = require('./personData');

const port = 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // api
  server.get('/api/people', (req, res) => {
    res.json(getPeople());
  });

  server.get('/api/people/:id', (req, res) => {
    const person = getPerson(req.params.id);

    if (person) {
      res.json(person);
    } else {
      res.sendStatus(404);
    }
  });

  server.get('/', (req, res) => {
    res.redirect('/people');
  });

  // standard next.js behavior
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    
    console.log(`> Ready on http://localhost:${port}`);
  });
});
