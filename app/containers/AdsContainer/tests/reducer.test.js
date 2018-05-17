
import { fromJS } from 'immutable';
import adsContainerReducer from '../reducer';

describe('adsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(adsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
