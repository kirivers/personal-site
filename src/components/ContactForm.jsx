import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import '../App.css';

const ContactForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }
  
    // Simulate form submission (Replace this with actual form handling logic)
    console.log("Form submitted:", formData);
  
    // Clear form data and show success message
    setFormData({ name: "", email: "", message: "" });
    setFormSubmitted(true);
  };
  

  return (
    <div className="contact-form-container">
      {formSubmitted ? (
        <p className="success-message">Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            onChange={handleChange} 
            value={formData.name}
            required 
            className="contact-input"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            onChange={handleChange} 
            value={formData.email}
            required 
            className="contact-input"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            onChange={handleChange} 
            value={formData.message}
            required 
            className="contact-input"
          />
          
          {/* Google reCAPTCHA */}
          <div className="captcha-container">
            <ReCAPTCHA sitekey="6Lc_6uwqAAAAAGOUlQIsU6OwTdCen_7Kh2UZI-no" onChange={handleCaptcha} />
          </div>
  
          <button type="submit" disabled={!captchaVerified} className="contact-button">Send Message</button>
        </form>
      )}
    </div>
  );
  
};

export default ContactForm;
