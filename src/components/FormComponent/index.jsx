/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ContactForm from "./ContactForm";
import BillingDetailsForm from "./BillingDetailsForm";

const FormComponent = ({ page, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    subject: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    province: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = ({ id, value }) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {page === "register" && (
          <RegisterForm formData={formData} handleChange={handleChange} />
        )}
        {page === "login" && (
          <LoginForm formData={formData} handleChange={handleChange} />
        )}
        {page === "contact" && (
          <ContactForm formData={formData} handleChange={handleChange} />
        )}
        {page === "billing" && (
          <BillingDetailsForm formData={formData} handleChange={handleChange} />
        )}
      </form>
    </div>
  );
};

FormComponent.propTypes = {
  page: PropTypes.oneOf(["register", "login", "contact", "billing"]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
