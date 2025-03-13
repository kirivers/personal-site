import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import '../css/Contact.css';

const ContactForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }
 
    try {
      const response = await fetch('http://localhost:9000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      const data = await response.json();
 
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setFormSubmitted(true);
        setErrorMessage(""); // Clear any previous errors
      } else {
        setErrorMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    }
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
          
          {/* Show error message if any */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Google reCAPTCHA */}
          <div className="send-area">
            <div className="captcha-container">
              <ReCAPTCHA sitekey="6Lc_6uwqAAAAAGOUlQIsU6OwTdCen_7Kh2UZI-no" onChange={handleCaptcha} />
            </div>
    
            <button type="submit" disabled={!captchaVerified} className="contact-button">Send Message</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
