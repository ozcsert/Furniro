import PropTypes from "prop-types";

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  error,
  className = "",
}) => (
  <div className="input-field-container">
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      className={`input-field ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={id}
      required={required}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string, // Add className to propTypes
};

export default InputField;
