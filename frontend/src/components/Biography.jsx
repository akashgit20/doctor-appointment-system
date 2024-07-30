import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            A doctor is a medical professional responsible for diagnosing,
             treating, and managing various health conditions and diseases.
              They conduct physical examinations, order and interpret diagnostic tests,
               prescribe medications, and develop treatment plans.
                Doctors often specialize in specific fields,
                 such as cardiology, pediatrics, or surgery, to provide focused care. 
                 They also educate patients on health maintenance and disease prevention,
                  working in various settings like hospitals, clinics, and private practices.
          </p>
          <p>"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
