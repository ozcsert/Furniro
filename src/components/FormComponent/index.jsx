/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.scss";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ContactForm from "./ContactForm";

const FormComponent = ({ page, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    subject: "",
    name: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (page === "register") {
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        setErrorMessage("Please fill out all fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }
    } else if (page === "login") {
      if (!formData.email || !formData.password) {
        setErrorMessage("Please fill out all fields.");
        return;
      }
    } else if (page === "contact") {
      if (!formData.name || !formData.email || !formData.subject) {
        setErrorMessage("Please fill out all fields.");
        return;
      }
    }

    setErrorMessage(""); 
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {page === "register" && <RegisterForm formData={formData} handleChange={handleChange} />}
        {page === "login" && <LoginForm formData={formData} handleChange={handleChange} />}
        {page === "contact" && <ContactForm formData={formData} handleChange={handleChange} />}


      
   
      </form>
    </div>
  );
};

export default FormComponent;
