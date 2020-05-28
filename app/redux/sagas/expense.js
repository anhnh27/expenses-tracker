import {put, call, takeLatest} from 'redux-saga/effects';
import {
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILURE,
  CREATE_EXPENSE,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILURE,
} from '../actions/expense';
import {createExpense, getExpenses} from '../services';

function* get() {
  const response = yield call(getExpenses);
  if (response.data) {
    yield put({type: GET_EXPENSES_SUCCESS, payload: response.data});
  } else {
    yield put({type: GET_EXPENSES_FAILURE, payload: response});
  }
}

function* create(action) {
  const response = yield call(createExpense, action.payload);
  if (response.success) {
    yield put({type: CREATE_EXPENSE_SUCCESS, payload: response.data});
  } else {
    yield put({type: CREATE_EXPENSE_FAILURE, payload: response});
  }
}

export default function* EXPENSEWatcher() {
  yield takeLatest(GET_EXPENSES, get);
  yield takeLatest(CREATE_EXPENSE, create);
}
