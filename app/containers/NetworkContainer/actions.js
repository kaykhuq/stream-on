/*
 *
 * NetworkContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_NETWORK,
  ADD_NETWORK,
  EDIT_NETWORK,
  DELETE_NETWORK,
  SEARCH
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadNETWORK() {
  return {
    type: LOAD_NETWORK,
  };
}
export function addNETWORK(network) {
  return {
    type: ADD_NETWORK,
    network
  };
}
export function editNETWORK(network) {
  return {
    type: EDIT_NETWORK,
    network
  };
}
export function deleteNETWORK(network) {
  return {
    type: DELETE_NETWORK,
    network
  };
}
export function search(keyword) {
  return {
    type: SEARCH,
    keyword
  }
}
