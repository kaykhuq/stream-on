import { createSelector } from 'reselect';

/**
 * Direct selector to the reportContainer state domain
 */
const selectReportContainerDomain = (state) => state.get('reportContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReportContainer
 */

const makeSelectReportContainer = () => createSelector(
  selectReportContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectFilter = () => createSelector(
  selectReportContainerDomain,
  (substate) => substate.get('filterStatus')
);
export {
  selectReportContainerDomain,
  makeSelectFilter
};
