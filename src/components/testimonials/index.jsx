import React, { useRef } from "react";
import { ReactComponent as QuoteIcon } from "assets/svg/quote.svg";
import "./testimonials.scss";
import { useIntersection } from "react-use";
import gsap from "gsap";

const Testimonials = () => {
  const wrapperRef = useRef(null);
  const wrapperIntersection = useIntersection(wrapperRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const tl = gsap.timeline();

  const animateImageIn = (elem) => {
    tl.to(
      elem,
      {
        height: "80%",
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

  if (wrapperIntersection && wrapperIntersection.intersectionRatio < 0.5) {
    animateImageOut(".testimonials .image");
    zoomIn(".testimonials .image img");
  } else {
    animateImageIn(".testimonials .image");
    zoomOut(".testimonials .image img");
  }

  return (
    <div className="testimonials">
      <div ref={wrapperRef} className="rel-wrapper">
        <div>
          <QuoteIcon />
          <h5>
            The UK jewellry awards is an event we always <br /> look forward to
            and we are so honoured to be <br /> recognised.
          </h5>
          <div className="by">
            <div>
              <h6>Jane Cooper</h6>
              <p>Naperville,USA</p>
            </div>
            <div>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
          <div className="image">
            <img src="/assets/images/black-gal.png" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Testimonials;
