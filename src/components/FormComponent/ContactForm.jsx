/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import InputField from "./InputField";

const ContactForm = ({ formData, handleChange }) => (
  <>
    <InputField
      id="name"
      label="Your Name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
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
      id="subject"
      label="Subject"
      type="text"
      value={formData.subject}
      onChange={handleChange}
      placeholder="This is optional"
    />
    <label htmlFor="subject">Subject</label>
    <textarea
      id="subject"
      className="input-about"
      placeholder="Hi! I’d like to ask about..."
      value={formData.subject}
      onChange={handleChange}
    />
  </>
);

export default ContactForm;
