/*
 *
 * NetworkContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_NETWORK,
  ADD_NETWORK,
  EDIT_NETWORK,
  DELETE_NETWORK,
  SEARCH
} from './constants';

const initialState = fromJS({
  keyword:'',
});

function networkContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_NETWORK:
      return state;
    case ADD_NETWORK:
      return state;
    case EDIT_NETWORK:
      return state;
    case DELETE_NETWORK:
      return state;
    case SEARCH:
      // console.log(action);
      return state.set('keyword', action.keyword);
    default:
      return state;
  }
}

export default networkContainerReducer;
