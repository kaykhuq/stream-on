
import { fromJS } from 'immutable';
import siteContainerReducer from '../reducer';

describe('siteContainerReducer', () => {
  it('returns the initial state', () => {
    expect(siteContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
