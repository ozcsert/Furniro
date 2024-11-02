import React from "react";
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
  const handleChange = (e) => {
    onChange(e); // Pass the event object directly
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "select" ? (
        <select
          id={id}
          value={value || ""}
          onChange={handleChange}
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
      ) : (
        <input
          id={id}
          type={type}
          value={value || ""}
          onChange={handleChange}
          placeholder={placeholder}
          className="input-field"
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default InputField;
