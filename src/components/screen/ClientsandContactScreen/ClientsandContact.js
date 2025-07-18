import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../../config/emailjs';
import "./Clients.css";

import Client1 from "../../../assets/client1.jpg";
import Client2 from "../../../assets/client2.webp";
import Client3 from "../../../assets/client3.jpg";
import Client4 from "../../../assets/client4.png";
import Client5 from "../../../assets/client5.jpg";

import facebookIcon from "../../../assets/facebook-icon.png";
import gitHubIcon from "../../../assets/git-hub-1.png";
import stackOverflowIcon from "../../../assets/stack-overflow.png";
import linkedinIcon from "../../../assets/linkedinIcon.png";

function ClientsandContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Dilshan", // Your name
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="clientsandContact">
      <div className="clients">
        <span className="clientsHeading">My Clients</span>
        <span className="clientsDes">
          I've had the privilege of collaborating with a diverse range of
          companies and clients. Some of the notable ones include
        </span>
        <div className="clientImgs">
          <img src={Client1} alt="Client1" className="clientImg" />
          <img src={Client2} alt="Client2" className="clientImg" />
          <img src={Client3} alt="Client3" className="clientImg" />
          <img src={Client4} alt="Client4" className="clientImg" />
          <img src={Client5} alt="Client5" className="clientImg" />
          {/* <img src={Client2} alt="Client4" className="clientImg" />= */}
          {/* <img src="" alt="" className="clientImg" /> */}
          {/* <img src="" alt="" className="clientImg" /> */}
        </div>
      </div>
      <div className="contact" id="contact">
        <span className="contactHeading">Contact me</span>
        <span className="contactDes">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form onSubmit={handleSubmit} className="contactForm">
          <input 
            type="text" 
            className="name" 
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="email" 
            className="email" 
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button 
            type="submit" 
            className="submitBtn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
          {submitStatus === 'success' && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
        <div className="links">
          <a href="https://www.linkedin.com/in/dilshan-weerathunga/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedinIcon" className="link" />
          </a>
          <a href="https://github.com/nishadadilshan" target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="gitHubIcon" className="link1" />
          </a>
          <a href="https://stackoverflow.com/users/13835917/nishada-dilshan-weerathunga" target="_blank" rel="noopener noreferrer">
            <img
              src={stackOverflowIcon}
              alt="stackOverflowIcon"
              className="link1"
            />
          </a>
          <a href="https://www.facebook.com/nishada.dilshanweerathunga" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="facebookIcon" className="link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClientsandContact;
