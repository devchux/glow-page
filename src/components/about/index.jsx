import React from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import "./about.scss";

const About = () => {
  const intersectionRef = React.useRef(null);
  const titleIntersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const tl = gsap.timeline();

  const slideUp = (elem) => {
    tl.to(elem, {
      y: 0,
      opacity: 1,
      stagger: 0.4,
    });
  };

  const slideDown = (elem) => {
    tl.to(elem, {
      y: 100,
      opacity: 0,
      stagger: 0.4,
    });
  };

  const animateImageIn = (elem) => {
    tl.to(
      elem,
      {
        height: 550,
        opacity: 1,
      },
      "-=1"
    );
  };

  const animateImageOut = (elem) => {
    tl.to(
      elem,
      {
        height: 0,
      },
      "-=1"
    );
  };

  const zoomOut = (elem) => {
    tl.to(elem, {
      scale: 1,
    });
  };

  const zoomIn = (elem) => {
    tl.to(elem, {
      scale: 1.3,
    });
  };

  if (
    titleIntersection &&
    (titleIntersection.intersectionRatio < 0.5 ||
      titleIntersection.intersectionRatio > 1)
  ) {
    slideDown(".h4-title, .product-info");
    animateImageOut(".about-image");
    zoomIn(".about-image img");
  } else {
    slideUp(".h4-title, .product-info");
    animateImageIn(".about-image");
    zoomOut(".about-image img");
  }

  return (
    <div className="about">
      <div className="image about-image">
        <img src="/assets/images/product1.jpeg" alt="" />
      </div>
      <div className="text-content" ref={intersectionRef}>
        <h4 className="h4-title">
          The self care brand that's setting a new <span>standard Clean</span>{" "}
          products
        </h4>
        <div className="product-info">
          <div className="products-made">
            <h6>What are products made?</h6>
            <p>
              Many brands, especially in period care, carry products that take
              centuries.
            </p>
          </div>
          <div className="products-made">
            <h6>What are products made?</h6>
            <p>
              Many brands, especially in period care, carry products that take
              centuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
