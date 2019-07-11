const express = require('express');
const path = require('path');
const fs = require('fs');
const { getPeople, getPerson } = require('./server-lib/personData.js');

const server = express();

// use prerender
// https://github.com/prerender/prerender-node
server.use(require('prerender-node')
  .set('prerenderServiceUrl', 'http://localhost:3456/')
  .set('prerenderToken', 'yQoMt8WAcPYDttJGW0mJ')
  .blacklisted(['^/api'])
);

// static/public files
server.use(express.static(__dirname));

// api
server.get('/api/people', (req, res) => {
  res.json(getPeople());
});

server.get('/api/people/:id', (req, res) => {
  res.json(getPerson(req.params.id));
});

// serve page w/ latest bundle
server.get('/people*', (req, res) => {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const latestBundle = manifest['main.js'];

  const html = `
    <!doctype html>
    <html>
      <body>
        <div id="root"></div>
        <script> window.prerenderReady = false; </script>
        <script src="${latestBundle}"></script>
      </body>
    </html>
  `;

  res.send(html);
});

server.get('*', (req, res) => {
  res.redirect('/people');
});

server.listen(3000, () => console.log('listening on port 3000'));
