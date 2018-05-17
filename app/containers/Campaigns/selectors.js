import { createSelector } from 'reselect';

/**
 * Direct selector to the campaigns state domain
 */
const selectCampaignsDomain = (state) => state.get('campaigns');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Campaigns
 */

const makeSelectCampaigns = () => createSelector(
  selectCampaignsDomain,
  (substate) => substate.toJS()
);
const makeSelectKeyword = () => createSelector(
  selectCampaignsDomain,
  (substate) => substate.get('keyword')
);
const makeSelectFilter = () => createSelector(
  selectCampaignsDomain,
  (substate) => substate.get('filterStatus')
);
export {
  selectCampaignsDomain,
  makeSelectKeyword,
  makeSelectFilter
};
