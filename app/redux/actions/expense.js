export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILURE = 'GET_EXPENSES_FAILURE';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const CREATE_EXPENSE_SUCCESS = 'CREATE_EXPENSE_SUCCESS';
export const CREATE_EXPENSE_FAILURE = 'CREATE_EXPENSE_FAILURE';

export const RESET_MUTATE = 'RESET_MUTATE';

export const getExpenses = () => {
    return {
        type: GET_EXPENSES
    }
}

export const createExpense = (payload) => {
    return {
        type: CREATE_EXPENSE,
        payload    
    }
}

export const resetMutate = () => {
    return {
        type: RESET_MUTATE,
    }
}
