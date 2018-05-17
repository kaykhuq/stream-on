/*
 *
 * TagContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_TAG,
  ADD_TAG,
  EDIT_TAG,
  DELETE_TAG,
  SEARCH
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadTAG() {
  return {
    type: LOAD_TAG,
  };
}
export function addTAG(tag) {
  return {
    type: ADD_TAG,
    tag
  };
}
export function editTAG(tag) {
  return {
    type: DEFAULT_ACTION,
    tag
  };
}
export function deleteTAG(tag) {
  return {
    type: DEFAULT_ACTION,
    tag
  };
}
export function search(keyword) {
  return {
    type: SEARCH,
    keyword
  }
}
