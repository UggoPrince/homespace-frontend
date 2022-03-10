const Label = (props) => {
  const { hFor, value } = props;
  return (
    <label htmlFor={hFor} className="text-gray-600">{value}</label>
  );
};

export default Label;
