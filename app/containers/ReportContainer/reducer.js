/*
 *
 * ReportContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FILTER
} from './constants';

const initialState = fromJS({
  filterStatus: '',
});

function reportContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FILTER:
      return state.set('filterStatus', action.filterStatus);
    default:
      return state;
  }
}

export default reportContainerReducer;
