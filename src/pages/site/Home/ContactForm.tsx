import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/images/team/bg-contact-team.png';
import leftImage from '../../../assets/images/shapes/contact-1-s-1.png';
import leftShape from '../../../assets/images/shapes/contact-shape-1.png';

// Import CSS files
import '../../../assets/vendors/bootstrap/css/bootstrap.min.css';
import '../../../assets/vendors/bootstrap-select/bootstrap-select.min.css';
import '../../../assets/vendors/animate/animate.min.css';
import '../../../assets/vendors/fontawesome/css/all.min.css';
import '../../../assets/vendors/jquery-ui/jquery-ui.css';
import '../../../assets/vendors/jarallax/jarallax.css';
import '../../../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css';
import '../../../assets/vendors/nouislider/nouislider.min.css';
import '../../../assets/vendors/nouislider/nouislider.pips.css';
import '../../../assets/vendors/drivschol-icons/style.css';
import '../../../assets/css/drivschol.css';

const ContactForm = () => {
  return (
    <section className="contact-two">
      <div
        className="contact-two__bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5"></div>
          <div className="col-xl-6 col-lg-7">
            <motion.form
              className="form-one team-form-one__form contact-form-validated"
              action="inc/sendemail.php"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              noValidate
            >
              <motion.div
                className="sec-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h6 className="sec-title__tagline">
                  <i className="icon-left-arrow sec-title__img"></i>
                  Contact with Us
                  <i className="icon-right-arrow sec-title__img"></i>
                </h6>
                <h3 className="sec-title__title">Feel Free to Write us</h3>
              </motion.div>
              <motion.div
                className="form-one__group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="form-one__control">
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="form-one__control">
                  <input type="email" name="email" placeholder="Email address" />
                </div>
                <div className="form-one__control">
                  <input type="text" name="phone" placeholder="Phone" />
                </div>
                <div className="form-one__control">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-one__control form-one__control__full">
                  <textarea name="message" placeholder="Write A Message"></textarea>
                </div>
                <div className="form-one__control form-one__control__full text-start">
                  <button type="submit" className="drivschol-btn drivschol-btn--base2">
                    <span>Send a message</span>
                  </button>
                </div>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
      <motion.div
        className="contact-two__left__image"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={leftImage} alt="contact-two__left__image" />
      </motion.div>
      <motion.div
        className="contact-two__left__shape"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={leftShape} alt="contact-two__left__image" />
      </motion.div>
    </section>
  );
};

export default ContactForm;
