import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For showing success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'service_eb59kke',
      'template_dw1er8p',
      form.current,
      '_Zgz1JpbhsidVf9si'
    )
    .then((result) => {
      console.log(result.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
    })
    .catch((error) => {
      console.log(error.text);
      setStatus("Failed to send message. Please try again.");
      setTimeout(() => setStatus(""), 5000);
    });
  };

  return (
    <div className="contact-container">
      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h2 className="title">
          Get <span className="gradient-text">In Touch</span>
        </h2>
        <div className="underline"></div>
        
        {/* Subtitle with proper line break */}
        <p className="subtitle">
          I'm currently open for freelance opportunities and interesting projects.
          <br />
          Let's build something amazing together!
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="contact-form-box">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Hi, I'd like to talk about..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message ✈️
          </button>

          {status && (
            <div className={`status-message ${status.includes("success") ? "success" : "error"}`}>
              {status}
            </div>
          )}
        </form>
      </div>

      {/* Direct Email Contact */}
      <p className="direct-contact-text">Or reach me directly at:</p>
      <a href="mailto:Satishguptag68@gmail.com" className="email-button">
        📧 Satishguptag68@gmail.com
      </a>

      {/* Social Media Buttons with Icons */}
      <div className="social-links">
        <a href="https://github.com/SatishGupta8591" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/satish-gupta-5a886a253/ " target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:Satishguptag68@gmail.com" className="social-button">
          <FaEnvelope size={24} /> Email
        </a>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <button
          className="star-repo-button"
          onClick={() => window.open("https://github.com/SatishGupta8591/Satish_Gupta_Portfolio", "_blank")}
        >
          ⭐ Star this repo for support
        </button>
      </div>
    </div>
  );
};

export default Contact;
