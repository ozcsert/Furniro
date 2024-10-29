/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.scss";
import google from "../../assets/Google.svg";
import github from "../../assets/GitHub.svg";
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {(page === "register" || page === "login") && (
          <>
           <p className="or-text">- OR -</p>
            <div className="signin-btns">
              <button type="button">
                <img src={github} alt={`${page === "register" ? "Sign up" : "Sign in"} with GitHub`} className="icon" />
                <p>{page === "register" ? "Sign up with GitHub" : "Sign in with GitHub"}</p>
              </button>
              <button type="button">
                <img src={google} alt={`${page === "register" ? "Sign up" : "Sign in"} with Google`} className="icon" />
                <p>{page === "register" ? "Sign up with Google" : "Sign in with Google"}</p>
              </button>
            </div>
            {page === "register" && (
              <p className="signin-text">
                Already have an account?{" "}
                <span className="login-link">Log in</span>
              </p>
            )}
          </>
        )}

        <button 
          type="submit" 
          className="button submit" 
          disabled={
            (page === "register" && 
             (!formData.fullName || 
              !formData.email || 
              !formData.password || 
              !formData.confirmPassword)) ||
            (page === "login" && 
             (!formData.email || 
              !formData.password)) ||
            (page === "contact" && 
             (!formData.name || 
              !formData.email || 
              !formData.subject))
          }
        >
          {page === "register"
            ? "Create Account"
            : page === "login"
            ? "Login"
            : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
