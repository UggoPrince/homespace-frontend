import { getWebUrl } from './getEnvs';

export const setLocalStorage = (keyPrefix = '', value) => {
  const key = `${getWebUrl()}_${keyPrefix}`;
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  const k = `${getWebUrl()}_${key}`;
  return localStorage.getItem(k);
};

export const destroyLocalStorage = (key) => { localStorage.removeItem(key); };
