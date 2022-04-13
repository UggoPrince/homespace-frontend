const varToString = (varObj) => Object.keys(varObj)[0];

const handleError = (err, divId) => {
  const div = document.getElementById(`${divId}`);
  // eslint-disable-next-line no-console
  console.log(div);
  let str = '';
  err.forEach((element) => {
    str += `${element}\n`;
  });
  div.innerHTML = str;
};

// eslint-disable-next-line import/prefer-default-export
export const handleSignupErrors = (error, postfix) => {
  const {
    password, firstname, lastname, email, country, address, state,
  } = error;
  if (firstname) {
    const divId = varToString({ firstname }) + postfix;
    handleError(firstname, divId);
  }
  if (lastname) {
    const divId = varToString({ lastname }) + postfix;
    handleError(lastname, divId);
  }
  if (country) {
    const divId = varToString({ country }) + postfix;
    handleError(country, divId);
  }
  if (state) {
    const divId = varToString({ state }) + postfix;
    handleError(state, divId);
  }
  if (address) {
    const divId = varToString({ address }) + postfix;
    handleError(address, divId);
  }
  if (email) {
    const divId = varToString({ email }) + postfix;
    handleError(email, divId);
  }
  if (password) {
    const divId = varToString({ password }) + postfix;
    handleError(password, divId);
  }
};

export const clearErrorDivs = () => {
  const divs = document.getElementsByClassName('authErrorDiv');
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].innerHTML !== '') divs[i].innerHTML = '';
  }
};

export const handleLoginErrors = (error, postfix) => {
  const { password, email } = error;
  if (email) {
    const divId = varToString({ email }) + postfix;
    handleError(email, divId);
  }
  if (password) {
    const divId = varToString({ password }) + postfix;
    handleError(password, divId);
  }
};
