import "./styles.css";

export const TextInput = ({ actionFn, type, inputValue, placeholder }) => {
  return (
    <input
      className="text-input"
      onChange={actionFn}
      type={type}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};
