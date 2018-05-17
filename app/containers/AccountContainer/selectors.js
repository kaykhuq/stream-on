import { createSelector } from 'reselect';

/**
 * Direct selector to the accountContainer state domain
 */
const selectAccountContainerDomain = (state) => state.get('accountContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AccountContainer
 */

const makeSelectAccountContainer = () => createSelector(
  selectAccountContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectAccountContainer;
export {
  selectAccountContainerDomain,
};
