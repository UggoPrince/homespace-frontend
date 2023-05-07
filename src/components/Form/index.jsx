const classlist = 'mx-auto bg-white rounded-lg p-8';

export default (props) => {
  const {
    children, formclass, submithandler, method, id,
  } = props;
  const classlist2 = `${classlist} ${formclass}`;
  return (
    <form onSubmit={submithandler} method={method} id={id} className={classlist2}>
      {children}
    </form>
  );
};
