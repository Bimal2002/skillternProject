import React from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
// import "./AboutSection.css";
import '../../../../assets/css/drivschol.css';


const AboutSection = () => {
  return (
    <section className="about-one">
      <div className="container">
        <div className="row ">
          <div className="col-lg-5">
            <AboutImage />
          </div>
          <div className="col-lg-7">
            <AboutContent />
          </div>
        </div>
      </div>
      <div className="about-one__element">
        <img src="assets/images/shapes/about-cercle-1-5.png" alt="Decorative Element" />
      </div>
    </section>
  );
};

export default AboutSection;
