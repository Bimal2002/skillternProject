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

// Import images
import team1 from '../../../assets/images/team/team-1-1.jpg';
import team2 from '../../../assets/images/team/team-1-2.jpg';
import team3 from '../../../assets/images/team/team-1-3.jpg';

const TeamSection = () => {
  const instructors = [
    { name: 'Alvert Tine', img: team1, delay: 0 },
    { name: 'Sara Liner', img: team2, delay: 0.3 },
    { name: 'Mark Wood', img: team3, delay: 0.7 },
  ];

  return (
    <section className="team-one team-one--page pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <motion.div
              className="sec-title text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h6 className="sec-title__tagline">
                <i className="icon-left-arrow sec-title__img"></i>
                Our Instructors
                <i className="icon-right-arrow sec-title__img"></i>
              </h6>
              <h3 className="sec-title__title">
                Meet Our Professional and <br />
                Experienced Instructors
              </h3>
            </motion.div>
          </div>
        </div>
        <div className="row gutter-y-30">
          {instructors.map((instructor, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <motion.div
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: instructor.delay }}
              >
                <div className="team-card__image">
                  <img src={instructor.img} alt={instructor.name} />
                </div>
                <div className="team-card__content">
                  <div className="team-card__hover">
                    <div className="team-card__content-share-icon">
                      <i className="fa fa-share-alt"></i>
                    </div>
                    <div className="team-card__social">
                      <div className="team-card__social__list">
                        <a href="https://facebook.com">
                          <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com">
                          <i className="icon-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://pinterest.com">
                          <i className="icon-pinterest" aria-hidden="true"></i>
                        </a>
                        <a href="https://instagram.com">
                          <i className="icon-Instagram" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="team-card__title">
                    <a href="team-details.html">{instructor.name}</a>
                  </h3>
                  <h6 className="team-card__designation">Instructor</h6>
                  <div className="team-card__content-shape">
                    <svg
                      width="60"
                      height="90"
                      viewBox="0 0 60 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M63 0L0 90H63V0Z" fill="" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
