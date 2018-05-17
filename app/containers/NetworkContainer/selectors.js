import { createSelector } from 'reselect';

/**
 * Direct selector to the networkContainer state domain
 */
const selectNetworkContainerDomain = (state) => state.get('networkContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NetworkContainer
 */

const makeSelectNetworkContainer = () => createSelector(
  selectNetworkContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectNetworkContainerDomain,
  (substate) => substate.get('keyword')
);
export {
  selectNetworkContainerDomain,
  makeSelectKeyword
};
