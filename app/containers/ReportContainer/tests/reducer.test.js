
import { fromJS } from 'immutable';
import reportContainerReducer from '../reducer';

describe('reportContainerReducer', () => {
  it('returns the initial state', () => {
    expect(reportContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
