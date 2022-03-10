const ErrorDivForSignup = (props) => {
  const { id, errorName } = props;
  return (
    <div id={id} className="text-red-500 signupErrorDiv" />
  );
};

export default ErrorDivForSignup;
