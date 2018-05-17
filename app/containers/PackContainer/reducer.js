/*
 *
 * PackContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PACK,
  SEARCH
} from './constants';

const initialState = fromJS({
  packs: {},
  keyword: '',
});

function packContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PACK:
      return state.set('packs', action.packs);
    case SEARCH:
      // console.log(action);
      return state.set('keyword', action.keyword);
    default:
      return state;
  }
}

export default packContainerReducer;
