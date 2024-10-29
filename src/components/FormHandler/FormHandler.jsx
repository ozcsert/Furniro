
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FormComponent from '../FormComponent';

const FormHandler = () => {
  const [currentPage, ] = useState('register'); 

  const handleRegisterSubmit = (formData) => {
    console.log('Kayıt verileri:', formData);
  };

  const handleLoginSubmit = (formData) => {
    console.log('Giriş verileri:', formData);
  };

  const handleContactSubmit = (formData) => {
    console.log('İletişim verileri:', formData);
  };

  return (
    <div>
  
      {currentPage === 'register' && (
        <FormComponent page="register" onSubmit={handleRegisterSubmit} />
      )}

      {currentPage === 'login' && (
        <FormComponent page="login" onSubmit={handleLoginSubmit} />
      )}

      {currentPage === 'contact' && (
        <FormComponent page="contact" onSubmit={handleContactSubmit} />
      )}
    </div>
  );
};

export default FormHandler;
