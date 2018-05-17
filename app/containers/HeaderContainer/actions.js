/*
 *
 * HeaderContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  LOG_OUT
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function logout() {
  return {
    type: LOG_OUT,
  };
}
