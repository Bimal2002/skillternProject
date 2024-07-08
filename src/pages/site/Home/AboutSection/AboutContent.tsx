import React from "react";
// import '../../../../assets/css/drivschol.css';

const AboutContent = () => {
  return (
    <div className="about-one__item about-one__item__one">
      <div className="about-one__item__head">
        <div className="sec-title text-start">
          <h6 className="sec-title__tagline">
            <i className="icon-left-arrow sec-title__img"></i>Enroll Now<i className="icon-right-arrow sec-title__img"></i>
          </h6>
          <h3 className="sec-title__title">Get Ready to Enroll into Latest Course</h3>
        </div>
        <p className="about-one__item__text">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look...
        </p>
      </div>
      <div className="about-one__item__block-contents">
        <h3 className="about-one__item__block-contents__text">
          The generated Lorem Ipsum is therefore always free from repetition, injected humor, or...
        </h3>
      </div>
      <div className="about-one__item__elememt">
        <div className="row">
          <div className="col-md-6">
            <div className="about-one__item__elememt__single">
              <div className="about-one__item__elememt__single__icon">
                <div className="icon">
                  <i className="icon-steering-wheel-1"></i>
                </div>
              </div>
              <h3 className="about-one__item__elememt__single__text">Successful Students</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-one__item__elememt__single">
              <div className="about-one__item__elememt__single__icon">
                <div className="icon">
                  <i className="icon-Instructor"></i>
                </div>
              </div>
              <h3 className="about-one__item__elememt__single__text">Expert Instructor</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about-one__progress">
        <h4 className="about-one__progress__title">Success Rate</h4>
        <div className="about-one__progress__bar">
          <div className="about-one__progress__inner count-bar" data-percent="80%">
            <div className="about-one__progress__number count-text">80%</div>
          </div>
        </div>
      </div>
      <a href="register.html" className="drivschol-btn drivschol-btn--black">
        <span>Register</span>
      </a>
    </div>
  );
};

export default AboutContent;
