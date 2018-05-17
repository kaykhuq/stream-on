
import { fromJS } from 'immutable';
import packContainerReducer from '../reducer';

describe('packContainerReducer', () => {
  it('returns the initial state', () => {
    expect(packContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
