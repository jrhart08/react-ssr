import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ClientApp from './ClientApp';

// eslint-disable-next-line no-console
console.log('Made it!');

// `hydrate` won't re-render the existing html when this page loads.
// Instead, it will just attach all the necessary event handlers.
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ClientApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
