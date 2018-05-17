
import { fromJS } from 'immutable';
import newAdContainerReducer from '../reducer';

describe('newAdContainerReducer', () => {
  it('returns the initial state', () => {
    expect(newAdContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
