const isEmptyString = (str) => {
  if (str !== null && str !== '' && str !== undefined && str !== 'undefined') return false;
  return true;
};

export const validateImageFile = (file) => {
  const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
  let error = null;
  if (!file?.name) error = 'Please upload an image file!';
  if (!allowedTypes.includes(file?.type)) error = 'Only png & jpg formets are allowed!';
  return error;
};

export default isEmptyString;
