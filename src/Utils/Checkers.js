const isEmptyString = (str) => {
  if (str !== null && str !== '' && str !== undefined && str !== 'undefined') return false;
  return true;
};

export default isEmptyString;
