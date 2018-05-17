import { createSelector } from 'reselect';

/**
 * Direct selector to the advertiserContainer state domain
 */
const selectAdvertiserContainerDomain = (state) => state.get('advertiserContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdvertiserContainer
 */

const makeSelectAdvertiserContainer = () => createSelector(
  selectAdvertiserContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectAdvertiserContainerDomain,
  (substate) => substate.get('keyword')
);
const makeSelectFilter = () => createSelector(
  selectAdvertiserContainerDomain,
  (substate) => substate.get('filterStatus')
);
export {
  selectAdvertiserContainerDomain,
  makeSelectKeyword,
  makeSelectFilter
};
