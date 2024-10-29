/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import InputField from "./InputField";

const LoginForm = ({ formData, handleChange }) => (
  <>
    <InputField
      id="email"
      label="Email Address"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
    />
    <InputField
      id="password"
      label="Password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
    />
  </>
);

export default LoginForm; 
