import PropTypes from "prop-types";

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  options,
  error,
}) => {
  if (type === "select") {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange({ id, value: e.target.value })}
          className="input-field"
        >
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
        {error && <div className="error-text">{error}</div>}
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
        onChange={(e) => onChange({ id, value: e.target.value })}
        placeholder={placeholder}
        className="input-field"
      />
      {error && <div className="error-text">{error}</div>}
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
  error: PropTypes.string,
};

export default InputField;
