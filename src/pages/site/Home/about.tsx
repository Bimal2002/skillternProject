import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import '../../../assets/css/drivschol.css';

// Import images
import aboutShape from '../../../assets/images/shapes/about-cercle-1-5.png';
import mainImage from '../../../assets/images/resources/image.png';
import registerNow from '../../../assets/images/resources/registerNow.png';
// import registerNow from '../../../../assets/images/resources/registerNow.png';
// import shape from '../../../../assets/images/shapes/about-cercle-1-1.png';
// import Main from '../../../../assets/images/resources/image.png';
// import aboutCircle from './assets/images/shapes/about-cercle-1-5.png';

const AboutOne = () => {
  return (
    <section className="about-one about-one__item__left about-one__item__one">
      <div className="container d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-5 d-flex align-items-center">
            <div>
              <Fade up delay={500}>
                <div className="about-one__item__left__img">
                  <Fade down delay={1000}>
                    <div className="about-one__item__left__img__shape">
                      <img src={aboutShape} alt="Shape" />
                    </div>
                  </Fade>
                  <img src={mainImage} alt="Main" />
                  <div className="about-one__item__left__img__sub_img">
                    <Link to="/register">
                      <img src={registerNow} alt="Register" style={{ cursor: 'pointer' }} />
                    </Link>
                    <svg viewBox="0 0 208 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 169V1H208" stroke="#EC2526" strokeWidth="2" />
                      <path d="M17 169V17H208" stroke="#EC2526" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </Fade>
              <Fade left delay={500}>
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
              </Fade>
            </div>
          </div>
          <div className="col-lg-7">
            <Fade right delay={300}>
              <div className=" ">
                <div className="about-one__item__head">
                  <Fade up duration={300}>
                    <div className="sec-title text-start">
                      <h6 className="sec-title__tagline">
                        <i className="icon-left-arrow sec-title__img"></i>
                        Enroll Now
                        <i className="icon-right-arrow sec-title__img"></i>
                      </h6>
                      <h3 className="sec-title__title">Get Ready to Enroll in the Latest Course</h3>
                    </div>
                  </Fade>
                  <Fade up delay={500}>
                    <p className="about-one__item__text">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.
                    </p>
                  </Fade>
                </div>
                <Fade up delay={500}>
                  <div className="about-one__item__block-contents">
                    <h3 className="about-one__item__block-contents__text">
                      The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                    </h3>
                  </div>
                </Fade>
                <div className="about-one__item__elememt">
                  <div className="row">
                    <div className="col-md-6">
                      <Fade up delay={500}>
                        <div className="about-one__item__elememt__single">
                          <div className="about-one__item__elememt__single__icon">
                            <div className="icon">
                              <i className="icon-steering-wheel-1"></i>
                            </div>
                          </div>
                          <h3 className="about-one__item__elememt__single__text">Successful Students</h3>
                        </div>
                      </Fade>
                    </div>
                    <div className="col-md-6">
                      <Fade up delay={700}>
                        <div className="about-one__item__elememt__single">
                          <div className="about-one__item__elememt__single__icon">
                            <div className="icon">
                              <i className="icon-Instructor"></i>
                            </div>
                          </div>
                          <h3 className="about-one__item__elememt__single__text">Expert Instructor</h3>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
                <Fade up delay={500}>
                  <div className="about-one__progress">
                    <h4 className="about-one__progress__title">Success Rate</h4>
                    <div className="about-one__progress__bar">
                      <div className="about-one__progress__inner count-bar" data-percent="80%">
                        <div className="about-one__progress__number count-text">80%</div>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade up delay={500}>
                  <Link to="/register" className="drivschol-btn drivschol-btn--black">
                    <span>Register</span>
                  </Link>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      {/* <div className="about-one__element">
        <img src={aboutCircle} alt="Circle Shape" />
      </div> */}
    </section>
  );
}

export default AboutOne;
