/*
 *
 * UserContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_USERS,
  ADD_USERS,
  EDIT_USERS,
  DELETE_USERS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  SEARCH
} from './constants';

export function loadUsers() {
  return {
    type: LOAD_USERS,
  }
}
export function addUsers(user) {
  return {
    type: ADD_USERS,
    user
  }
}
export function editUsers(user) {
  return {
    type: EDIT_USERS,
    user
  }
}
export function deleteUsers(user) {
  return {
    type: DELETE_USERS,
    user
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  }
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  }
}
export function loginFail() {
  return {
    type: LOGIN_FAIL,
  }
}
export function logout() {
  return {
    type: LOG_OUT,
  }
}

export function search(keyword) {
  return {
    type: SEARCH,
    keyword
  }
}
