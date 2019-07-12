import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

console.log('Made it!');

// `hydrate` won't re-render the existing html when this page loads.
// Instead, it will just attach all the necessary event handlers.
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
