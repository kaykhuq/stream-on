/*
 *
 * TagContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_TAG,
  ADD_TAG,
  EDIT_TAG,
  DELETE_TAG,
  SEARCH
} from './constants';

const initialState = fromJS({
  keyword: '',
});

function tagContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_TAG:
      return state;
    case ADD_TAG:
      return state;
    case EDIT_TAG:
      return state;
    case DELETE_TAG:
      return state;
    case SEARCH:
      // console.log(action);
      return state.set('keyword', action.keyword);
    default:
      return state;
  }
}

export default tagContainerReducer;
