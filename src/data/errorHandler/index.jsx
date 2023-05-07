import { SignOutToLogin, SignOutToHome } from '../../auth/signout';

export default (props) => {
  const { error } = props;
  const { graphQLErrors } = error;
  if (graphQLErrors && graphQLErrors.length) {
    const { message, code } = graphQLErrors[0];
    if (code === 'FORBIDDEN' && message === 'Not authenticated as user.') {
      return <SignOutToHome />;
    }
    if (code === 'UNAUTHENTICATED') {
      return <SignOutToLogin />;
    }
    return <div>{message}</div>;
  }
  return <div>{error}</div>;
};

export const formErrorHandler = (error, setErrors, notify, use = 'state') => {
  if (error.networkError) notify('Network error. Try Again.', 2);
  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    notify(`${error.message}`, 2);
    const fieldError = error.graphQLErrors[0].error;
    if (fieldError) {
      if (use === 'state') setErrors(fieldError);
      else setErrors.current = fieldError;
    }
  }
};
