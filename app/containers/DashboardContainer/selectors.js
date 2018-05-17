import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardContainer state domain
 */
const selectDashboardContainerDomain = (state) => state.get('dashboardContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashboardContainer
 */

const makeSelectDashboardContainer = () => createSelector(
  selectDashboardContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectDashboardContainer;
export {
  selectDashboardContainerDomain,
};
