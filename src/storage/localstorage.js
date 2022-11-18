export const saveAtLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const localData = localStorage.getItem(key);
  return JSON.parse(localData);
};
