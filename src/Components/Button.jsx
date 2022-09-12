const Button = ({ value, handler }) => {
  return (
    <button
      name={value}
      value={value}
      onClick={handler}
      className="bg-orange-400 py-3 px-5 text-white rounded-lg shadow-md text-2xl flex justify-center cursor-pointer"
    >
      {value}
    </button>
  );
};

export default Button;
