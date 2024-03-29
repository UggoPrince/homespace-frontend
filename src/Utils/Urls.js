export const getSearchString = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const { q, start } = params;
  return { q, start };
};

export const getPath = () => window.location.pathname;

export const itsThisPath = (path) => {
  const { pathname } = window.location;
  return pathname === path;
};

export const computeSearchUrl = (searchText, start = 0, path = '') => {
  let searchUrl;
  searchUrl = `${window.location.origin}${path}`;
  if (searchText) searchUrl += `?q=${searchText}&start=${start}`;
  else searchUrl += `?start=${start}`;
  return searchUrl;
};

export const computeSearchPath = (searchText, start = 0) => {
  if (searchText) return `?q=${searchText}&start=${start}`;
  return `?start=${start}`;
};

export const setSearchUrl = (url) => { window.location.href = url; };

export const setUrlOnAddressBar = (url, title) => { window.history.pushState(null, title, url); };

export const prepareStartQueryString = (start) => {
  if (start === undefined) start = 0;
  if (Number(start).toString() === 'NaN') start = 0;
  if (start !== 0) {
    const k = start / 10;
    const l = Math.floor(k);
    const m = l * 10;
    start = m;
  }
  return start;
};
