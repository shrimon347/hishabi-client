export const getLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error("Failed to save to localStorage");
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.error("Failed to remove from localStorage");
  }
};
