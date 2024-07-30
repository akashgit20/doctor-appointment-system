import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Akash Medical Care is a cutting-edge healthcare facility focused
             on delivering compassionate and expert medical services. 
              At Akash Medical Care,
              we prioritize your well-being, guiding you on a journey towards 
              optimal health and wellness with a commitment to excellence in healthcare.


          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
