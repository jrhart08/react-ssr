const express = require('express');
const path = require('path');
const fs = require('fs');
const { getPeople, getPerson } = require('./server-lib/personData.js');

const server = express();

// static/public files
// server.use(express.static(path.resolve(__dirname, 'public')));
server.use(express.static(__dirname));

// api
server.get('/api/people', (req, res) => {
  res.json(getPeople());
});

server.get('/api/people/:id', (req, res) => {
  res.json(getPerson(req.params.id));
});

// serve page
server.get('*', (req, res) => {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const latestBundle = manifest['main.js'];

  const html = `
    <!doctype html>
    <html>
      <body>
        <div id="root"></div>
        <script src="${latestBundle}"></script>
      </body>
    </html>
  `;

  res.send(html);
});

server.listen(3000, () => console.log('listening on port 3000'));
