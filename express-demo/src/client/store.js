import configureStore from '../shared/store/configureStore';

// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__INITIAL_REDUX_STATE__);

export default store;
