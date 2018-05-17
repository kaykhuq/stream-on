/*
 *
 * Campaigns actions
 *
 */

import {
  DEFAULT_ACTION,
  SEARCH,
  FILTER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function search(keyword) {
  return {
    type: SEARCH,
    keyword
  };
}
export function onFilter(filterStatus) {
  return {
    type: FILTER,
    filterStatus
  };
}
