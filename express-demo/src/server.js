/* eslint-disable no-console */
import express from 'express';
import servePage from './_servePage';

const PORT = 3000;
const server = express();

server.use(express.static(__dirname));

server.get('*', servePage);

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}`);
});
