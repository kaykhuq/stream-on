/*
 *
 * UserContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_USERS,
  ADD_USERS,
  EDIT_USERS,
  DELETE_USERS,
  // LOG_IN,
  SEARCH
} from './constants';



const initialState = fromJS({
  users: {},
  isLogin: false,
  keyword: ''
  // account:{}
});


function userContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_USERS:
      return state.set('users', action.users);
      // console.log(action);
    case ADD_USERS:
      return state;
    case EDIT_USERS:
      return state;
    case DELETE_USERS:
      return state;
    // case LOG_IN:
    //   return state
    //     .set('isLogin', !isLogin);
    case SEARCH:
    // console.log(action);
      return state.set('keyword',action.keyword);
    default:
      return state;
  }
}

export default userContainerReducer;
