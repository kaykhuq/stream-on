/*
 *
 * Campaigns reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SEARCH,
  FILTER
} from './constants';

const initialState = fromJS({
  keyword: '',
  filterStatus: null,
});

function campaignsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SEARCH:
      return state.set('keyword', action.keyword);
    case FILTER:
      // console.log(action);
      return state.set('filterStatus', parseInt(action.filterStatus));
    default:
      return state;
  }
}

export default campaignsReducer;
