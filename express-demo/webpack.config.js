const prod = require('./webpack.config.prod');
const dev = require('./webpack.config.dev');

const env = process.env.NODE_ENV;

module.exports = /^prod/.test(env) ? prod : dev;
