
import { fromJS } from 'immutable';
import advertiserContainerReducer from '../reducer';

describe('advertiserContainerReducer', () => {
  it('returns the initial state', () => {
    expect(advertiserContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
