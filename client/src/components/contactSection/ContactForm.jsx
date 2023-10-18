import React from 'react';
import './ContactForm.css';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-container">
        <div className="left-container">
          <div className="left-inner-container">
            <h2>Let's Chat</h2>
            <p>Whether you have a question, want to start a project, or simply want to connect, I'm here for you.</p>
            <p>Feel free to contact me for work, job opportunities, or just a friendly discussion on topics like cricket, history, or politics.</p>
            <div className="contact-info">
              <p><FaEnvelope style={{ fontSize: '1.5rem' }} /> Email: your-email@example.com</p>
              <p><FaPhone style={{ fontSize: '1.5rem' }} /> Phone: (123) 456-7890</p>
              <p><FaMapMarker style={{ fontSize: '1.5rem' }} /> Address: 123 Main St, Your City</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <form action="#">
              <h2 className="lg-view">Contact</h2>
              <h2 className="sm-view">Let's Chat</h2>
              <p>* Required</p>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <input type="text" placeholder="Name *" />
              <input type="email" placeholder="Email *" />
              <input type="phone" placeholder="Phone" />
              <textarea rows="4" placeholder="Message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
