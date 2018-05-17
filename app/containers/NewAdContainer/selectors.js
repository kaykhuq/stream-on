import { createSelector } from 'reselect';

/**
 * Direct selector to the newAdContainer state domain
 */
const selectNewAdContainerDomain = (state) => state.get('newAdContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewAdContainer
 */

const makeSelectNewAdContainer = () => createSelector(
  selectNewAdContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectNewAdContainer;
export {
  selectNewAdContainerDomain,
};
