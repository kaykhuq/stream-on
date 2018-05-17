
import { fromJS } from 'immutable';
import accountContainerReducer from '../reducer';

describe('accountContainerReducer', () => {
  it('returns the initial state', () => {
    expect(accountContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
