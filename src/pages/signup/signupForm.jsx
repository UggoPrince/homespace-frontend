// import 'regenerator-runtime/runtime';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import '../../components/Form/style.css';
import toast from 'react-hot-toast';
import TextField, { PasswordTextField } from '../../components/Input/textField';
import { SIGNUP_USER_QUERY_STRING } from '../../data/user/queryString';
import Alert, { notify } from '../../components/Alert';
import { useAuth } from '../../auth/AuthProvider';
import Button from '../../components/Button';
import useForm from '../../components/Form/useForm';

const SignupForm = () => {
  const { errors, setErrors } = useForm();
  const { loginUser } = useAuth();
  let alertLoadingId;
  const [signUp, { loading, error, data }] = useMutation(SIGNUP_USER_QUERY_STRING,
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
      loginUser(token, user);
    }
    if (error) {
      toast.remove(alertLoadingId);
      if (error.networkError) notify('Network error. Try Again.', 2);
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        notify(`${error.message}`, 2);
        const fieldError = error.graphQLErrors[0].error;
        if (fieldError) setErrors(fieldError);
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
        <div className="flex flex-row pt-10 pb-28">
          <form onSubmit={signup} method="POST" id="signupForm" className="mx-auto bg-white p-8 signupForm shadow-2xl rounded-lg">
            <div className="w-full inline-block">
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-left">
                <TextField name="firstname" label="First Name" error={errors.firstname} required />
              </div>
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-right">
                <TextField name="lastname" label="Last Name" error={errors.lastname} required />
              </div>
            </div>
            <div className="w-full inline-block">
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-left">
                <TextField name="country" label="Country" error={errors.country} required />
              </div>
              <div className="pb-5 inline-block max-w-full m-auto form-div-holder float-right">
                <TextField name="state" label="State" error={errors.state} required />
              </div>
            </div>
            <div className="pb-4">
              <TextField name="address" label="Address" type="text" error={errors.address} required />
            </div>
            <div className="pb-5">
              <TextField name="email" label="Email" error={errors.email} type="email" autoComplete="email" required />
            </div>
            <div className="pb-5">
              <PasswordTextField name="password" label="Password" error={errors.password} required />
            </div>
            <div className="pb-5">
              <PasswordTextField name="confirmPassword" label="Confirm Password" error={errors.confirmPassword} required />
            </div>
            <div className="pt-5">
              <Button id="signupButton" type="submit" text="Sign Up" />
            </div>
          </form>
        </div>
      </div>
      <Alert />
    </div>
  );
};

// 8 characters minimum, One uppercase, lowercase and number.)

export default SignupForm;
