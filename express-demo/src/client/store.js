import configureStore from '../shared/store/configureStore';
import rootReducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__INITIAL_REDUX_STATE__, rootReducer);

export default store;
