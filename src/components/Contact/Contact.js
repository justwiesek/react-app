import React from "react";

import "./Contact.css";
import icon1 from "../../img/icon-home.jpg";
import icon2 from '../../img/icon-phone.png';
import icon3 from '../../img/icon-mail.png';


const Contact = props => (
  <div className="contact-main">
    <div className="contact-title">{props.title}</div>

    <div className="main-context">
      <div className="context">
        <div className="contact-row1">
          <div className="single-contact">
            <img src={icon1} alt="" />
          </div>
          <div className="contact-details">
            <h5>Binghamton, New York</h5>
            <p>4040 Deegan Lake Road</p>
          </div>
        </div>

        <div className="contact-row2">
          <div className="single-contact">
            <img src={icon2} alt="" />
          </div>
          <div className="contact-details">
            <h5>00123456789</h5>
            <p>Mon to Fri 9am to 6 pm</p>
          </div>
        </div>

        <div className="contact-row3">
          <div className="single-contact">
            <img src={icon3} alt="" />
          </div>
          <div className="contact-details">
            <h5>support@magicaltravels.com</h5>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>


      <div className="contact-form">
        <div className="first-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter email address" />
          <input type="text" placeholder="Enter subject" />
        </div>

        <div className="second-form">
          <div className="textarea">
          <textarea
            name="message"
            placeholder="Enter Message"
            required></textarea>
          </div>

          <div className="contact-button">
            <button>Send</button>
          </div>  
        </div>
      </div>
    </div>
  </div>
);
 
export default Contact;
