import { combineReducers } from 'redux';
import expenseReducer from './expense';

const rootReducer = combineReducers({
    expense: expenseReducer
});

export default rootReducer;
