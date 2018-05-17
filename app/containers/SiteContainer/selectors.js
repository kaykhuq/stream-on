import { createSelector } from 'reselect';

/**
 * Direct selector to the siteContainer state domain
 */
const selectSiteContainerDomain = (state) => state.get('siteContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SiteContainer
 */

const makeSelectSiteContainer = () => createSelector(
  selectSiteContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectSiteContainerDomain,
  (substate) => substate.get('keyword')
);
export {
  selectSiteContainerDomain,
  makeSelectKeyword
};
