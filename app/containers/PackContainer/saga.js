// // import { take, call, put, select } from 'redux-saga/effects';

// // Individual exports for testing
// export default function* defaultSaga() {
//   // See example in containers/HomePage/saga.js
// }

import { take, call, put, select,fork } from 'redux-saga/effects';
import { loadPacks } from './actions';
import { getPacks } from '../../utils/apiHelper';
// Individual exports for testing

export function* getPack() {
  try {
    const packs = yield call(getPacks);
    yield put(loadPacks(packs));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchPacksPage() {
  yield fork(getPack);
}



