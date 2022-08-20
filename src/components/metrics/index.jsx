import gsap from "gsap";
import React, { useRef } from "react";
import { useIntersection } from "react-use";
import "./metrics.scss";

const Metrics = () => {
  const intersectionRef = useRef(null);
  const titleIntersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const tl = gsap.timeline();

  const slideUp = (elem) => {
    tl.to(
      elem,
      {
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.05
      },
    );
  };

  const slideDown = (elem) => {
    tl.to(
      elem,
      {
        y: 100,
        x: -50,
        opacity: 0,
        stagger: 0.05
      },
    );
  };

  const animateImageIn = (elem) => {
    tl.to(
      elem,
      {
        height: 600,
        borderRadius: 300,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.5"
    );
  };

  const animateImageOut = (elem) => {
    tl.to(
      elem,
      {
        height: 0,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    );
  };

  const zoomOut = (elem) => {
    tl.to(elem, {
      scale: 1,
      duration: 0.8,
    });
  };

  const zoomIn = (elem) => {
    tl.to(elem, {
      scale: 1.3,
      duration: 0.8,
    });
  };

  if (
    titleIntersection &&
    (titleIntersection.intersectionRatio < 0.5 ||
      titleIntersection.intersectionRatio > 1)
  ) {
    slideDown(".metrics .balls > div");
    animateImageOut(".metrics .img-wrapper");
    zoomIn(".metrics .img-wrapper img");
  } else {
    slideUp(".metrics .balls > div");
    animateImageIn(".metrics .img-wrapper");
    zoomOut(".metrics .img-wrapper img");
  }

  return (
    <div className="metrics">
      <div>
        <div>
          <h4>
            We make going all natural <span>Beauty</span>.
          </h4>
          <p>
            Made with nature's best ingredients - our product's transparent
            ingredient lists allow you to know.
          </p>
          <div ref={intersectionRef} className="balls">
            <div>
              <p>
                Product <br /> Users
              </p>
              <h3>7M+</h3>
            </div>
            <div>
              <p>
                Brand <br /> Product
              </p>
              <h3>99+</h3>
            </div>
            <div>
              <p>
                Product <br /> Reviews
              </p>
              <h3>5M</h3>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img src="/assets/images/black-gal.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
