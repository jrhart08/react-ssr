const prerender = require('prerender');

// note: all of these are optional
const server = prerender({
  port: 3456,

  // where chrome is installed on your server
  chromeLocation: '/usr/bin/google-chrome',
  
  // logs to stdout
  logRequests: true,
  
  // how frequently (in ms) prerender will check
  // to see if chrome is done rendering the page
  pageDoneCheckInterval: 1000,
});

server.start();
