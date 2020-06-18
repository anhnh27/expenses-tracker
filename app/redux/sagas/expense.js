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
  if (response.ok) {
    yield put({type: GET_EXPENSES_SUCCESS, payload: response.data});
  } else {
    yield put({type: GET_EXPENSES_FAILURE, payload: response.message});
  }
}

function* create(action) {
  const response = yield call(createExpense, action.payload);
  if (response.ok) {
    yield put({type: CREATE_EXPENSE_SUCCESS, payload: action.payload});
  } else {
    yield put({type: CREATE_EXPENSE_FAILURE, payload: response.message});
  }
}

export default function* expensesWatcher() {
  yield takeLatest(GET_EXPENSES, get);
  yield takeLatest(CREATE_EXPENSE, create);
}
