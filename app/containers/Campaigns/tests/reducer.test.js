
import { fromJS } from 'immutable';
import campaignsReducer from '../reducer';

describe('campaignsReducer', () => {
  it('returns the initial state', () => {
    expect(campaignsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
