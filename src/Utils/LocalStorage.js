import { getWebUrl } from './getEnvs';

export const setLocalStorage = (keyPrefix = '', value) => {
  const key = `${getWebUrl()}_${keyPrefix}`;
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  const k = `${getWebUrl()}_${key}`;
  return localStorage.getItem(k);
};

export const getUserFromLocalStorage = (key) => {
  const user = getLocalStorage(key);
  if (user) return JSON.parse(user);
  return user;
};

export const updateLocalStorage = (key, data) => {
  const userStr = getLocalStorage(key);
  let user = JSON.parse(userStr);
  user = { ...user, ...data };
  setLocalStorage(key, JSON.stringify(user));
};

export const destroyLocalStorage = (key) => {
  const k = `${getWebUrl()}_${key}`;
  localStorage.removeItem(k);
};
