import React from 'react';
import '.././../../assets/vendors/animate/animate.min.css'; // Make sure to include animate.css if you're using wow animations
import ctacar from '../../../assets/images/shapes/cta-car.png';
import ctabg from '../../../assets/images/backgrounds/cta-bg-1-1.png';
const CtaOne = () => {
  return (
    <section className="cta-one relative">
      <div className="cta-one__wrapper relative">
        <div className="container mx-auto py-12">
          <div className="row flex items-center">
            <div className="col-md-7">
              <div className="cta-one__content wow fadeInUp" data-wow-delay="200ms">
                <h3 className="cta-one__title text-4xl font-bold mb-4">
                  Book Your First Driving Lesson Today
                </h3>
                <a href="contact.html" className="drivschol-btn px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  <span>Book Now</span>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="cta-one__thumb relative">
                <div className="cta-one__thumb__one wow fadeInUp" data-wow-delay="300ms">
                  <div className="cta-one__thumb__one__thumb">
                    <img
                      src={ctacar}
                      alt="drivschol"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-one__element absolute top-0 left-0 w-full h-full">
          <img src={ctabg} alt="background" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
