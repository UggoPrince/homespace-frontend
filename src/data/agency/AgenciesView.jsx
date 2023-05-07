const AgenciesView = (props) => {
  const { children } = props;
  return (
    <div className="container hs-max-width-85 hs-pb-100">
      <div className="whitespace-normal">
        {children}
      </div>
    </div>
  );
};

export default AgenciesView;
