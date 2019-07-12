import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import sharedRootReducer from '../reducers';

const middlewares = [thunk];

// https://redux.js.org/recipes/server-rendering
export default function configureStore(
  initialState = {},
  rootReducer = sharedRootReducer,
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}
