import React from "react";
import logo from "assets/svg/logo1.svg";
import "./companies.scss";

const Companies = () => {
  return (
    <div className="companies" data-aos="fade-left" data-aos-duration="500">
      <div data-aos="fade-left" data-aos-duration="500">
        <img src="/assets/images/framesi.gif" alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="500">
        <img src={logo} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">
        <img src="/assets/images/ck.png" alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
        <img src="/assets/images/alovera.jpeg" alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="500">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Companies;
