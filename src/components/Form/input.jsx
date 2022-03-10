const Input = (props) => {
  const { name, type, isRequired } = props;
  return (
    <input
      className="w-full focus:ring-indigo-600 focus:ring-1 py-1 px-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
      name={name}
      type={type}
      required={isRequired}
    />
  );
};

export default Input;
