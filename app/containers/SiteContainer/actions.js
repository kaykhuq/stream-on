/*
 *
 * SiteContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SITE,
  ADD_SITE,
  EDIT_SITE,
  DELETE_SITE,
  SEARCH
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadSITE() {
  return {
    type: LOAD_SITE,
  };
}
export function addSITE(site) {
  return {
    type: ADD_SITE,
    site
  };
}
export function editSITE(site) {
  return {
    type: EDIT_SITE,
    site
  };
}
export function deleteSITE(site) {
  return {
    type: DELETE_SITE,
    site
  };
}
export function search(keyword) {
  return {
    type: SEARCH,
    keyword
  }
}

