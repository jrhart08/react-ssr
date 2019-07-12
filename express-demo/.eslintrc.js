module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:lodash/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
};
