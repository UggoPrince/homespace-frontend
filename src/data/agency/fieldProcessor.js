const getValue = (field) => (field ? field.value : null);

// extract variables from create agency form
export const getCreateAgencyVariables = (event) => {
  const {
    name, username, country, state, address, phoneNumber, email, about, facebook, instagram, twitter, whatsapp,
  } = event.target;
  const fields = {
    name: name.value,
    username: username.value,
    address: address.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    about: about.value,
  };
  const addValue = (field, fieldName) => {
    if (field.value) fields[fieldName] = field.value;
  };
  addValue(country, 'country');
  addValue(state, 'state');
  addValue(facebook, 'facebook');
  addValue(twitter, 'twitter');
  addValue(instagram, 'instagram');
  addValue(whatsapp, 'whatsapp');
  return fields;
};

// create agency function
export const createTheAgency = (event, func) => {
  event.preventDefault();
  const variables = getCreateAgencyVariables(event);
  func({
    variables,
  });
};
