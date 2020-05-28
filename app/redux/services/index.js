//Should put all those urls to constants file in real project.

export const getExpenses = async () => {
  try {
    const response = await fetch(
      'https://n9ekzmz317.execute-api.ap-southeast-1.amazonaws.com/getExpenses',
    );
    return response.json();
  } catch (ex) {
    return ex.message;
  }
};

export const createExpense = async (expense) => {
  try {
    const response = await fetch(
      'https://hyglbc21uj.execute-api.ap-southeast-1.amazonaws.com/default/createExpense',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(expense),
      },
    );
    const jsonData = await response.json();
    if(jsonData.success){
      const newData = await fetch(
        'https://n9ekzmz317.execute-api.ap-southeast-1.amazonaws.com/getExpenses',
      );
      const newDataJson = await newData.json();
      const finalJson = {...jsonData, ...newDataJson};
      return finalJson;
    } else {
      return jsonData;
    }
  } catch (ex) {
    return ex.message;
  }
};