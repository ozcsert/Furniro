import PropTypes from "prop-types";

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  options,
}) => {
  if (type === "select") {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select id={id} value={value} onChange={onChange} className="input-field">
          <option value="" disabled>
            {placeholder}
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default InputField;
