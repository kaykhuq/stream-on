/*
 *
 * ReportContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  FILTER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function onFilter(filterStatus) {
  return {
    type: FILTER,
    filterStatus
  };
}
