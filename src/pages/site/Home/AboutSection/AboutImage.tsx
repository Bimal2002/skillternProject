import React from "react";
import '../../../../assets/css/drivschol.css';
import registerNow from '../../../../assets/images/resources/registerNow.png';
import shape from '../../../../assets/images/shapes/about-cercle-1-1.png';
import Main from '../../../../assets/images/resources/image.png';

const AboutImage = () => {
  return (
    <div className="about-one__item__left">
      <div className="about-one__item__left__img">
        <div className="about-one__item__left__img__shape">
          <img src="assets/images/resources/about__shape-1-1.png" alt="Shape" />
        </div>
        <img src={Main} alt="Main" />
        <div className="about-one__item__left__img__sub_img">
          <a href="register.html">
            <img src={registerNow} alt="Register" style={{ cursor: "pointer" }} />
          </a>
          <svg viewBox="0 0 208 169" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 169V1H208" stroke="#EC2526" strokeWidth="2" />
            <path d="M17 169V17H208" stroke="#EC2526" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="about-one__item__left__contact">
        <a className="about-one__item__left__contact__link" href="tel:303-555-0105">
          <div className="about-one__item__left__contact__link__icon">
            <i className="icon-chat2"></i>
          </div>
          <div className="about-one__item__left__contact__link__call">
            <span className="about-one__item__left__contact__link__subtext">Call to Questions</span>
            <h6 className="about-one__item__left__contact__link__text">(303) 555-0105</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutImage;
