/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import InputField from "./InputField";

const RegisterForm = ({ formData, handleChange }) => (
  <>
    <InputField
      id="fullName"
      label="Full Name"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Enter your full name"
    />
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
    <InputField
      id="confirmPassword"
      label="Confirm Password"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm your password"
    />
  </>
);

export default RegisterForm; // Dışa aktarma
