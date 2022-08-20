import React, { useEffect, useRef } from "react";
import "./header.scss";
import { ReactComponent as StarIcon } from "assets/svg/star.svg";
import gsap from "gsap";

const Header = () => {
  const leftContent = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".left-content, header .img-wrapper",
      {
        y: leftContent.current.getBoundingClientRect().height,
        opacity: 0,
      },
      { y: 0, opacity: 1 }
    );
  }, []);

  return (
    <header>
      <div className="left-content" ref={leftContent}>
        <div className="h3">Let your skin</div>
        <div className="h3">
          Going{" "}
          <div
            style={{ backgroundImage: "url(/assets/images/black-gal.png)" }}
          />{" "}
          Out.
        </div>
        <p>
          We want to bring to the world through our <br /> products that very
          special feeling joy, healthy and <br /> positive energy.
        </p>
        <div className="buttons">
          <button className="colored">
            Shop Now <span>&rarr;</span>
          </button>
          <button className="transparent">
            <span>&#9658;</span> How to use
          </button>
        </div>
      </div>
      <div className="img-wrapper">
        <img src="/assets/images/black-gal.png" alt="" />
        <div className="video">
          <div>
            <StarIcon />
            <img src="/assets/images/product1.jpeg" alt="" />
            <div>&#9658;</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
