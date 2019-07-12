import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

// eslint-disable-next-line no-console
console.log('Made it!');

// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__INITIAL_REDUX_STATE__);

// `hydrate` won't re-render the existing html when this page loads.
// Instead, it will just attach all the necessary event handlers.
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
