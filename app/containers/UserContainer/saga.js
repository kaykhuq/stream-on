import { take, call, put, select, fork } from 'redux-saga/effects';
import { loadUsers } from '../../containers/UserContainer/actions';
import { eventChannel } from 'redux-saga';
import { push } from 'react-router-redux';
import { selectUserContainerDomain } from '../../containers/UserContainer/selectors';
import { getUsers } from '../../utils/apiHelper';
import { makeSelectLogin } from './selectors';


export function* getUSer() {
  try {
    const users = yield call(getUsers);
    yield put(loadUsers(users));
    console.log(users);
  } catch (e) {
    console.log(e);
  }
}

export default function* watchUserPage() {
  yield fork(getUsers);
}
