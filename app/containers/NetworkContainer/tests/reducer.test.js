
import { fromJS } from 'immutable';
import networkContainerReducer from '../reducer';

describe('networkContainerReducer', () => {
  it('returns the initial state', () => {
    expect(networkContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
