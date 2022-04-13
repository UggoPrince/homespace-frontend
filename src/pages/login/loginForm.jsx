import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import '../../components/Form/style.css';
import toast from 'react-hot-toast';
import TextField, { PasswordTextField } from '../../components/Input/textField';
import Button from '../../components/Button';
import { LOGIN_USER_QUERY_STRING } from '../../data/user/queryString';
import Alert, { notify } from '../../components/Alert';
import { useAuth } from '../../auth/AuthProvider';
import useForm from '../../components/Form/useForm';

const LoginForm = () => {
  const { loginUser } = useAuth();
  const { errors, setErrors } = useForm();
  let alertLoadingId;
  const [login, { loading, error, data }] = useMutation(LOGIN_USER_QUERY_STRING,
    {
      errorPolicy: 'all',
    });
  useEffect(() => {
    if (loading) {
      alertLoadingId = notify('Logging In...', 1);
    }
    if (data) {
      toast.remove(alertLoadingId);
      const { token, user } = data.login;
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
  const signIn = (e) => {
    e.preventDefault();
    const {
      email, password,
    } = e.target;
    login({
      variables: {
        email: email.value,
        password: password.value,
      },
    });
  };

  return (
    <div>
      <div className="container content-center">
        <div className="flex flex-row pt-16 pb-28">
          <form onSubmit={signIn} method="POST" id="loginForm" className="mx-auto bg-white p-8 loginForm shadow-2xl rounded-lg">
            <div className="pb-5">
              <TextField
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                required
              />
            </div>
            <div className="pb-5">
              <PasswordTextField
                name="password"
                label="Password"
                error={errors.password}
                required
              />
            </div>
            <div className="pt-5">
              <Button id="loginButton" type="submit" text="Login" />
            </div>
          </form>
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default LoginForm;
