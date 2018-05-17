import { createSelector } from 'reselect';

/**
 * Direct selector to the packContainer state domain
 */
const selectPackContainerDomain = (state) => state.get('packContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PackContainer
 */

const makeSelectPackContainer = () => createSelector(
  selectPackContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectPackContainerDomain,
  (substate) => substate.get('keyword')
);
const makeLoadPack = () => createSelector(
  selectPackContainerDomain,
  (substate) => substate.get('packs')
);
export {
  selectPackContainerDomain,
  makeSelectKeyword,
  makeLoadPack
};
