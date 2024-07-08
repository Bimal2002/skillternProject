import React from 'react';
import { motion } from 'framer-motion';

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

// Import background image
import backgroundImage from '../../../assets/images/backgrounds/why-choose-1-1.png';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'icon-Instructor',
      title: 'Quality Service',
      link: 'service-d-driving.html',
      delay: 0.5,
    },
    {
      icon: 'icon-Student',
      title: 'Experience Teacher',
      link: 'team-details.html',
      delay: 0.6,
    },
    {
      icon: 'icon-trust-1',
      title: 'Trusted Platform',
      link: 'team-details.html',
      delay: 0.7,
    },
    {
      icon: 'icon-certificate-1',
      title: 'Provide Certificate',
      link: 'team-details.html',
      delay: 0.9,
    },
  ];

  return (
    <section className="why-choose-one">
      {/* <div
        className="why-choose-one__bg jarallax"
        data-jarallax
        data-speed="0.3"
        data-imgPosition="50% -100%"
        
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div> */}
        <div
        className="why-choose-one__bg jarallax"
        data-jarallax
        data-speed="0.3"
        data-imgPosition="50% -100%"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <motion.div
              className="sec-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h6 className="sec-title__tagline">
                <i className="icon-left-arrow sec-title__img"></i>
                Why Choose Us
                <i className="icon-right-arrow sec-title__img"></i>
              </h6>
              <h3 className="sec-title__title">
                Why You Should Choose Our <br />
                Drivschol?
              </h3>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.p
              className="why-choose-one__head__text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by
              injected humour, some form.
            </motion.p>
          </div>
        </div>
        <div className="why-choose-one__inner">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <motion.div
                  className="why-choose-one__single__item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                >
                  <div className="why-choose-one__single__item__icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="why-choose-one__single__item__text">
                    <a href={feature.link}>{feature.title}</a>
                  </h3>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
