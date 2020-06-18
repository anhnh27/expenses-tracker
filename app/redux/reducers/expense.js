import {
  GET_EXPENSES,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILURE,
  CREATE_EXPENSE,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILURE,
  RESET_MUTATE,
} from '../actions/expense';
import {mergeResponse} from '../../utils';

const initialState = {
  list: null,
  mutateSuccess: null,
  loading: true,
  error: null,
};

export default EXPENSEReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        list: null,
        loading: true,
        error: null,
      };

    case GET_EXPENSES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };

    case GET_EXPENSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_EXPENSE:
      return {
        ...state,
        mutateSuccess: null,
        loading: true,
        error: null,
      };

    case CREATE_EXPENSE_SUCCESS:
      return {
        ...state,
        list: mergeResponse(state.list, action.payload),
        mutateSuccess: true,
        loading: false,
        error: null,
      };

    case CREATE_EXPENSE_FAILURE:
      return {
        ...state,
        single: null,
        loading: false,
        error: action.payload,
      };

    case RESET_MUTATE:
      return {
        ...state,
        mutateSuccess: null,
      };

    default:
      return state;
  }
};
