/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types"; 
import InputField from "./InputField";

const LoginForm = ({ formData, handleChange }) => (
  <>
    <InputField
      id="email"
      name="email"
      label="Email Address"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
    />
    <InputField
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
    />
  </>
);

LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
