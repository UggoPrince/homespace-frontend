// import 'regenerator-runtime/runtime';
import { useEffect } from 'react';
import '../../components/Form/style.css';
import toast from 'react-hot-toast';
import TextField, { PasswordTextField } from '../../components/Input/textField';
import Container, { container as Container2 } from '../../components/Input/inputContainer';
import { SIGNUP_USER_QUERY_STRING } from '../../data/user/queryString';
import Alert, { notify } from '../../components/Alert';
import { useAuth } from '../../auth/AuthProvider';
import Button from '../../components/Button';
import useForm from '../../components/Form/useForm';
import Form from '../../components/Form';
import { register } from '../../data/user/fieldProcessor';
import { formErrorHandler } from '../../data/errorHandler';
import { mutateApi } from '../../Utils/Api';

const SignupForm = () => {
  const { errors, setErrors } = useForm();
  const { loginUser } = useAuth();
  let alertLoadingId;
  const [signUp, { loading, error, data }] = mutateApi(SIGNUP_USER_QUERY_STRING);
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
      formErrorHandler(error, setErrors, notify);
    }
  });
  const auth = (e) => {
    register(e, signUp);
  };

  return (
    <div>
      <div className="container content-center">
        <div className="flex flex-row pt-10 pb-28">
          <Form submithandler={auth} method="POST" id="signupForm" formclass="signupForm shadow-2xl">
            <div className="w-full inline-block">
              <Container2 classlist="float-left">
                <TextField name="firstname" label="First Name" error={errors.firstname} required />
              </Container2>
              <Container2 classlist="float-right">
                <TextField name="lastname" label="Last Name" error={errors.lastname} required />
              </Container2>
            </div>
            <div className="w-full inline-block">
              <Container2 classlist="float-left">
                <TextField name="country" label="Country" error={errors.country} required />
              </Container2>
              <Container2 classlist="float-right">
                <TextField name="state" label="State" error={errors.state} required />
              </Container2>
            </div>
            <Container>
              <TextField name="address" label="Address" type="text" error={errors.address} required />
            </Container>
            <Container>
              <TextField name="email" label="Email" error={errors.email} type="email" autoComplete="email" required />
            </Container>
            <Container>
              <PasswordTextField name="password" label="Password" error={errors.password} required />
            </Container>
            <Container>
              <PasswordTextField name="confirmPassword" label="Confirm Password" error={errors.confirmPassword} required />
            </Container>
            <Container>
              <Button id="signupButton" type="submit" text="Sign Up" />
            </Container>
          </Form>
        </div>
      </div>
      <Alert />
    </div>
  );
};

// 8 characters minimum, One uppercase, lowercase and number.)

export default SignupForm;
