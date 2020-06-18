import {
  GET_EXPENSES_ENDPOINT,
  CREATE_EXPENSES_ENDPOINT,
} from '../../constants/endpoints';
import {fetchWithTimeout} from '../../utils';

export const getExpenses = async () => {
  try {
    const response = await fetchWithTimeout(GET_EXPENSES_ENDPOINT, null, 5000);
    const json = await response.json();
    return {
      ok: true,
      ...json,
    };
  } catch (ex) {
    return {
      ok: false,
      message: ex.message,
    };
  }
};

export const createExpense = async (expense) => {
  try {
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(expense),
    };

    const response = await fetchWithTimeout(
      CREATE_EXPENSES_ENDPOINT,
      options,
      1000,
    );
    const json = await response.json();
    return {
      ok: json.success,
      expense,
    };
  } catch (ex) {
    return {
      ok: false,
      message: ex.message,
    };
  }
};
