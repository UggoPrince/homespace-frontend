// import 'regenerator-runtime/runtime';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import './style.css';
import toast from 'react-hot-toast';
import Input from '../../components/Form/input';
import Label from '../../components/Form/label';
import ErrorDiv from '../../components/Form/errorDiv';
import queryString from '../../data/user/queryString';
import { handleErrors, clearErrorDivs } from '../../data/user/response';
import Alert, { notify } from '../../components/Alert';
import { setNewState } from '../../utils/Store';
import { useAuth } from '../../auth/AuthProvider';

const SignupForm = () => {
  const { login } = useAuth();
  let alertLoadingId;
  const [signUp, { loading, error, data }] = useMutation(queryString,
    {
      errorPolicy: 'all',
    });
  useEffect(() => {
    if (loading) {
      alertLoadingId = notify('Saving...', 1);
    }
    if (data) {
      toast.remove(alertLoadingId);
      notify('Account created!', 3);
      const { token, user } = data.signUp;
      login(token);
    }
    if (error) {
      toast.remove(alertLoadingId);
      if (error.networkError) notify('Network error. Try Again.', 2);
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        notify(`${error.message}`, 2);
        clearErrorDivs();
        const fieldError = error.graphQLErrors[0].error;
        if (fieldError) handleErrors(fieldError, 'ErrorSignup');
      }
    }
  });
  const signup = (e) => {
    e.preventDefault();
    const {
      firstname, lastname, email, password, confirmPassword, country, state, address,
    } = e.target;
    signUp({
      variables: {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        country: country.value,
        state: state.value,
        address: address.value,
      },
    });
  };

  return (
    <div>
      <div className="container content-center">
        <div className="flex flex-row pt-16 pb-28">
          <form onSubmit={signup} method="POST" id="signupForm" className="mx-auto bg-white p-8 signupForm shadow-2xl rounded-lg">
            <div className="w-full inline-block">
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-left">
                <Label htmlFor="signupFirstName" value="First name" />
                <Input name="firstname" type="text" isRequired />
                <ErrorDiv id="firstnameErrorSignup" />
              </div>
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-right">
                <Label htmlFor="signupLastName" value="Last name" />
                <Input name="lastname" type="text" isRequired />
                <ErrorDiv id="lastnameErrorSignup" />
              </div>
            </div>
            <div className="w-full inline-block">
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-left">
                <Label htmlFor="signupCountry" value="Country" />
                <Input name="country" type="text" isRequired />
                <ErrorDiv id="countryErrorSignup" />
              </div>
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-right">
                <Label hFor="signupState" value="State" />
                <Input name="state" type="text" isRequired />
                <ErrorDiv id="stateErrorSignup" />
              </div>
            </div>
            <div className="pb-4">
              <Label hFor="signupAddress" value="Address" />
              <Input name="address" type="text" isRequired />
              <ErrorDiv id="addressErrorSignup" />
            </div>
            <div className="pb-5">
              <Label hFor="signupEmail" value="Email" />
              <Input id="signupEmail" name="email" autoComplete="email" type="email" isRequired />
              <ErrorDiv id="emailErrorSignup" />
            </div>
            <div className="w-full inline-block">
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-left">
                <Label hFor="signupPassword" value="Password" />
                <Input name="password" type="password" isRequired />
                <ErrorDiv id="passwordErrorSignup" />
              </div>
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-right">
                <Label hFor="signupConfirmPassword" value="Confirm Password" />
                <Input name="confirmPassword" type="password" isRequired />
              </div>
            </div>
            <div className="pt-5">
              <button
                id="signupButton"
                type="submit"
                className=" w-full
              bg-indigo-600
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:ring-opacity-50
              text-white
              py-2 px-2
              rounded font-bold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default SignupForm;
