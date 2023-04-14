// import React, { useRef } from "react";
import React from "react";
import ContactImg from "../../../assets/contact.svg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>We are here to answer all of your questions, reach out</p>
        </div>

        <div className="contact-section">
          <div className="contact-col1">
            <p>Book a meeting with us</p>
            <div className="contact-image">
              <img src={ContactImg} alt="" />
            </div>
            {/* <a
              href="https://calendly.com/the-parthenon/30min"
              className="cta__book"
            > */}
            <a href="" className="cta__book">
              Book
            </a>
          </div>
          <div className="contact-col2">
            <p>Or send us an email</p>
            <form className="contact-form">
              <div className="form-group">
                <label for="fname">Name*</label>
                <input
                  type="text"
                  name="user_name"
                  id="fname"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email*</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="message">Message </label>
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  className="input-textarea"
                />
              </div>
              <div className="form-group">
                <label></label>
                {/* <button className="send-button" onClick={notify}> */}
                <button className="send-button">Send</button>
                {/* <ToastContainer /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
