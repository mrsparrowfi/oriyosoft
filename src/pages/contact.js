import React from 'react';
import '../assets/scss/pages/contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1068AF" fillOpacity="1" d="M0,224L40,192C80,160,160,96,240,90.7C320,85,400,139,480,149.3C560,160,640,128,720,101.3C800,75,880,53,960,53.3C1040,53,1120,75,1200,112C1280,149,1360,203,1400,229.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" />
      </svg>
      <div className="header--title">
        <h2> Get in touch </h2>
      </div>
      <div className="contact--body">
        <div className="left--panel">
          <h2> Send a message </h2>
          <ContactForm />
        </div>
        <div className="right--panel">
          <ContactInfo />
          <div className="contact--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.1923865749422!2d24.95917583486446!3d60.193182540344395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920978122898cd%3A0x1b9d449d7eb28989!2sInarintie%208%2C%2000550%20Helsinki!5e0!3m2!1sen!2sfi!4v1680542852942!5m2!1sen!2sfi"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="geo-location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="contact--form" action="" method="post">
      <div className="row">
        <div className="column">
          <span> * First Name: </span>
          <input type="text" name="first-name" id="firstName" placeholder="Elon" required />
        </div>

        <div className="column">
          <span> * Last Name: </span>
          <input type="text" name="last-name" id="lastName" placeholder="Musk" required />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <span> * Email: </span>
          <input type="email" name="email" id="email" placeholder="elon.musk@twitter.com" required />
        </div>

        <div className="column">
          <span> Phone: </span>
          <input type="text" name="phone" id="phone" placeholder="+358 72 727 7272" />
        </div>
      </div>

      <div className="msg-text">
        <span> * Your Message: </span>
        <textarea type="text" name="phone" id="phone" placeholder="Write your message here" required />
      </div>

      <div className="form--btn">
        <button type="submit">
          {' '}
          <span> Submit </span>
        </button>
        <div className="space" />
      </div>

    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact--info">
      <h2> Contact Info </h2>
      <div className="address">
        <i className="bi bi-geo-alt" />
        <span> Inarintie 8, 00550, Helsinki, Finland </span>
      </div>
      <div className="email">
        <i className="bi bi-envelope" />
        <span> info@radiusit.com </span>
      </div>
      <div className="phone">
        <i className="bi bi-telephone-outbound" />
        <span> +358 72 727 7272 </span>
      </div>
      <ul className="social-icons">
        <li><i className="bi bi-facebook" aria-hidden="true" /></li>
        <li><i className="bi bi-twitter" aria-hidden="true" /></li>
        <li><i className="bi bi-instagram" aria-hidden="true" /></li>
        <li><i className="bi bi-linkedin" aria-hidden="true" /></li>
      </ul>
    </div>
  );
}

export default Contact;
