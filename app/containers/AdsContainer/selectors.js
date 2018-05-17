import { createSelector } from 'reselect';

/**
 * Direct selector to the adsContainer state domain
 */
const selectAdsContainerDomain = (state) => state.get('adsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AdsContainer
 */

const makeSelectAdsContainer = () => createSelector(
  selectAdsContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectAdsContainer;
export {
  selectAdsContainerDomain,
};
