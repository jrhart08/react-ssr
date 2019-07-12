import keyBy from 'lodash/keyBy';
import { GET_PEOPLE } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        ...keyBy(action.people, 'id'),
      };

    default:
      return state;
  }
};
