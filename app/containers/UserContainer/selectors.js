import { createSelector } from 'reselect';

/**
 * Direct selector to the userContainer state domain
 */
const selectUserContainerDomain = (state) => state.get('userContainer');

const makeSelectUserContainer = () => createSelector(
  selectUserContainerDomain,
  (substate) => substate.toJS()
);
const makeSelectLogin = () => createSelector(
  selectUserContainerDomain,
  (substate) => substate.toJS('isLogin')
);
const makeSelectKeyword = () => createSelector(
  selectUserContainerDomain,
  (substate) => substate.get('keyword')
);
export {
  selectUserContainerDomain,
  makeSelectUserContainer,
  makeSelectLogin,
  makeSelectKeyword
};
