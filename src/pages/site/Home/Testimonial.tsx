

import React from 'react';

// Import CSS files
import '../../../assets/vendors/bootstrap/css/bootstrap.min.css';
import '../../../assets/vendors/bootstrap-select/bootstrap-select.min.css';
import '../../../assets/vendors/animate/animate.min.css';
import '../../../assets/vendors/fontawesome/css/all.min.css';
import '../../../assets/vendors/jquery-ui/jquery-ui.css';
import '../../../assets/vendors/jarallax/jarallax.css';
import '../../../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css';
// import '../../../assets/vendors/nouislider/nouislider.min.css';
// import '../../../assets/vendors/nouislider/nouislider.pips.css';
import '../../../assets/vendors/tiny-slider/tiny-slider.css';
// import '../../../assets/vendors/wow/wow.js';


import '../../../assets/vendors/drivschol-icons/style.css';
import '../../../assets/css/drivschol.css';
import testimonial1 from '../../../assets/images/team/testimonial-1-1.png';
import testimonial2 from '../../../assets/images/team/testimonial-1-2.png';
import testimonial3 from '../../../assets/images/team/testimonial-1-3.png';
import thumb1 from '../../../assets/images/resources/testi-1-4.jpg';
import thumb2 from '../../../assets/images/resources/testi-1-3.jpg';
import thumb3 from '../../../assets/images/resources/testi-1-6.jpg';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-two">
      <div className="testimonials-two__inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonials-two__inner__head">
                <div className="sec-title text-start wow fadeInUp" data-wow-duration="300ms">
                  <h6 className="sec-title__tagline">
                    <i className="icon-left-arrow sec-title__img"></i>
                    Our Testimonial
                    <i className="icon-right-arrow sec-title__img"></i>
                  </h6>
                  <h3 className="sec-title__title">
                    What Our Students are Saying?
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-two__carousel drivschol-owl__carousel drivschol-owl__carousel--with-shadow drivschol-owl__carousel--basic-nav owl-carousel owl-theme"
            data-owl-options='{
              "items": 1,
              "margin": 0,
              "smartSpeed": 700,
              "loop": true,
              "autoplay": true,
              "nav": true,
              "URLhashListener": true,
              "dots": false,
              "navText": ["<span class=\\"icon-arrow-left\\"></span>","<span class=\\"icon-arrow\\"></span>"],
              "responsive": {
                "0": {
                  "items": 1
                },
                "500": {
                  "items": 1
                }
              }
            }'
          >
            <div className="testimonials-two__carousel__item" data-hash="item1">
              <div className="testimonials-two__carousel__item__image">
                <img
                  src={testimonial1}
                  alt="testimonials-two__carousel__item__image"
                />
                <div className="quite">
                  <i className="icon-quite"></i>
                </div>
              </div>
              <div className="testimonials-two__carousel__item__content">
                <div className="testimonials-two__carousel__item__content__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p className="testimonials-two__carousel__item__content__text">
                  Flexible Classes refers to the process of acquiring
                  knowledge or skills through the use of digital technologies
                  and the internet. Flexible Classes refers to the process
                  flexible Classes refers
                </p>
                <div className="testimonials-two__carousel__item__content__author">
                  <span className="testimonials-two__carousel__item__content__author__name">
                    Savannah Nguyen
                  </span>
                  <p className="testimonials-two__carousel__item__content__author__deganation">
                    Driving Student
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-two__carousel__item" data-hash="item1">
              <div className="testimonials-two__carousel__item__image">
                <img
                  src={testimonial1}
                  alt="testimonials-two__carousel__item__image"
                />
                <div className="quite">
                  <i className="icon-quite"></i>
                </div>
              </div>
              <div className="testimonials-two__carousel__item__content">
                <div className="testimonials-two__carousel__item__content__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p className="testimonials-two__carousel__item__content__text">
                  Flexible Classes refers to the process of acquiring
                  knowledge or skills through the use of digital technologies
                  and the internet. Flexible Classes refers to the process
                  flexible Classes refers
                </p>
                <div className="testimonials-two__carousel__item__content__author">
                  <span className="testimonials-two__carousel__item__content__author__name">
                    Savannah Nguyen
                  </span>
                  <p className="testimonials-two__carousel__item__content__author__deganation">
                    Driving Student
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonials-two__carousel__item" data-hash="item1">
              <div className="testimonials-two__carousel__item__image">
                <img
                  src={testimonial1}
                  alt="testimonials-two__carousel__item__image"
                />
                <div className="quite">
                  <i className="icon-quite"></i>
                </div>
              </div>
              <div className="testimonials-two__carousel__item__content">
                <div className="testimonials-two__carousel__item__content__ratings">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p className="testimonials-two__carousel__item__content__text">
                  Flexible Classes refers to the process of acquiring
                  knowledge or skills through the use of digital technologies
                  and the internet. Flexible Classes refers to the process
                  flexible Classes refers
                </p>
                <div className="testimonials-two__carousel__item__content__author">
                  <span className="testimonials-two__carousel__item__content__author__name">
                    Savannah Nguyen
                  </span>
                  <p className="testimonials-two__carousel__item__content__author__deganation">
                    Driving Student
                  </p>
                </div>
              </div>
            </div>
            {/* Add more testimonial items here */}
          </div>

          <div className="carousel-thumb__two">
            <div
              className="testimonials-two__carousel-thumb drivschol-owl__carousel owl-theme owl-carousel"
              data-owl-options='{
                "items": 3,
                "margin": 1,
                "smartSpeed": 700,
                "loop": true,
                "autoplay": true,
                "URLhashListener": true,
                "center": true,
                "dots": false,
                "navText": ["<span class=\\"icon-arrow-left\\"></span>","<span class=\\"icon-arrow\\"></span>"],
                "responsive": {
                  "0": {
                    "items": 3
                  },
                  "500": {
                    "items": 3
                  }
                }
              }'
            >
              <a href="#item1" className="item" data-hash="item1">
                <span className="testimonials-two__meta-thumb">
                  <img src={thumb1} alt="drivschol" />
                </span>
              </a>
              <a href="#item1" className="item" data-hash="item1">
                <span className="testimonials-two__meta-thumb">
                  <img src={thumb1} alt="drivschol" />
                </span>
              </a>
              <a href="#item1" className="item" data-hash="item1">
                <span className="testimonials-two__meta-thumb">
                  <img src={thumb1} alt="drivschol" />
                </span>
              </a>
              {/* Add more testimonial thumbnails */}
            </div>
          </div>
        </div>

        <div className="testimonials-two__element_one">
          <img src="assets/images/shapes/testimonial-1-1.png" alt="" />
        </div>

        <div className="testimonials-two__element_two">
          <img src="assets/images/shapes/testimonial-1-2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
