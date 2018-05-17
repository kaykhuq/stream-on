/*
 *
 * HeaderContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, LOG_OUT,
} from './constants';

const initialState = fromJS({
  isLogin:true
});

function headerContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOG_OUT:
      isLogin=false;
      return state;
    default:
      return state;
  }
}

export default headerContainerReducer;
