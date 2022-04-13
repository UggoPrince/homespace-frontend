/* eslint-disable react/button-has-type */
export default (props) => {
  const { id, type, text } = props;
  return (
    <button
      id={id}
      type={type}
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
      {text}
    </button>
  );
};
