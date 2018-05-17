import { createSelector } from 'reselect';

/**
 * Direct selector to the tagContainer state domain
 */
const selectTagContainerDomain = (state) => state.get('tagContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TagContainer
 */

const makeSelectTagContainer = () => createSelector(
  selectTagContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectTagContainerDomain,
  (substate) => substate.get('keyword')
);
export {
  selectTagContainerDomain,
  makeSelectKeyword
};
