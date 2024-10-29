/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div className="form-group stacked">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="input-field"
      placeholder={placeholder}
      required
    />
  </div>
);

export default InputField
