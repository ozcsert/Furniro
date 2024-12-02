import React from 'react';
import './style.scss'; // Style file

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        This application is an e-commerce platform that allows users to discover and purchase products. 
        Our goal is to provide the best shopping experience for our users.
      </p>
      <p>
        Our team is focused on customer satisfaction, aiming to offer quality products and excellent service. 
        If you have any questions or feedback, please feel free to contact us.
      </p>
      <h2>Who We Are?</h2>
      <p>
        We are a team specialized in e-commerce, aiming to create a user-friendly platform. 
        With years of experience, we strive to provide the best products and services.
      </p>
     
      <h2>Find Us on Google Maps</h2>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzXCsDQyJzQ0LjAiUyAxNDRyJzQwLjAiRQ!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
