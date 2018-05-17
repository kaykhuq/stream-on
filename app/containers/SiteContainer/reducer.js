/*
 *
 * SiteContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_SITE,
  ADD_SITE,
  EDIT_SITE,
  DELETE_SITE,
  SEARCH
} from './constants';

const initialState = fromJS({
  keyword: '',
});

function siteContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_SITE:
      return state;
    case ADD_SITE:
      return state;
    case EDIT_SITE:
      return state;
    case DELETE_SITE:
      return state;
    case SEARCH:
      // console.log(action);
      return state.set('keyword', action.keyword);
    default:
      return state;
  }
}

export default siteContainerReducer;
