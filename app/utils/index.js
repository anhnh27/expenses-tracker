import {Category} from '../constants/references';

export const fetchWithTimeout = async (url, options, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout!')), timeout),
    ),
  ]);
};

export const mergeResponse = (list, obj) => {
  const newState = updateArrayObjectValue(list, obj);
  return newState;
};

const getCategoryNameFromId = (id) => {
  const category = Object.keys(Category).find(
    (key) => Category[key] === parseInt(id),
  );
  return category;
};

const updateArrayObjectValue = (list, newObj) => {
  let newList = null;
  const categoryName = getCategoryNameFromId(newObj.categoryId);
  newList = list.map((x) => {
    if (x.Category === categoryName) {
      x.Amount += newObj.amount * 1;
      return x;
    }
    return x;
  });
  return newList;
};
