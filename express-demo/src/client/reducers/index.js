import rootSharedReducer from '../../shared/reducers';
import client from './client';

export default {
  ...rootSharedReducer,
  client,
};
