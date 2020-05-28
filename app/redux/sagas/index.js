import {all, fork} from 'redux-saga/effects';
import expenseWatcher from './expense';

export default function* rootSaga() {
  yield all([fork(expenseWatcher)]);
}
