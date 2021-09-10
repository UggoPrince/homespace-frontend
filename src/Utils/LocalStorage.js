import { getWebUrl } from './getEnvs';

export const setLocalStorage = (keyPrefix = '', value) => {
  const key = `${getWebUrl()}_${keyPrefix}`;
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => localStorage.getItem(key);

export const destroyLocalStorage = (key) => { localStorage.removeItem(key); };
