import React from 'react';
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

const CtaThree = () => {
  // Dummy data (replace with actual data fetching logic)
  const funfacts = [
    { number: '30.3k', text: 'Student Enrolled' },
    { number: '40.5k', text: 'Class Completed' },
    { number: '88.9%', text: 'Satisfaction Rate' },
    { number: '6.30+', text: 'Top Instructors' }
  ];
  
  return (
    <section className="cta-three relative">
      <div className="cta-three__bg jarallax" data-jarallax data-speed="0.3" data-imgPosition="50% -100%"
        style={{ backgroundImage: 'url(assets/images/backgrounds/cta-bg-1-1.jpg)' }}>
      </div>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="client-carousel">
              <div className="container">
                <div className="client-carousel__one drivschol-owl__carousel">
                  {/* Replace with your images dynamically */}
                  <div className="client-carousel__one__item">
                    <img src="assets/images/resources/brand-1-1.png" alt="drivschol" />
                  </div>
                  {/* Add more images as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-three__inner">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="cta-three__inner__content">
                <h3 className="cta-three__inner__content__text">
                  Our Students Pass the Driving Test on the First Try. Start Learning Now
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cta-three__inner__link text-start text-md-end">
                <a href="contact.html" className="cta-three__inner__link__btn drivschol-btn drivschol-btn--base2">
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Funfacts section */}
        <div className="funfact mt-16">
          <div className="container">
            <div className="row">
              {funfacts.map((fact, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="funfact__item count-box">
                    <div className="funfact__item__content">
                      <h3 className="funfact__item__content__number">
                        <span className="count-text">{fact.number}</span>
                      </h3>
                      <p className="funfact__item__content__text">{fact.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaThree;
