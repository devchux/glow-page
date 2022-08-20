import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useIntersection } from "react-use";
import "./faq.scss";

const Faq = () => {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const wrapperIntersection = useIntersection(wrapperRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const tl = gsap.timeline();

  const data = [
    {
      name: "What are products made?",
      body: "Many brands, especially in period care, carry products that take centuries to biodegrade with pronounce.",
    },
    {
      name: "How to purchase our products",
      body: "Many brands, especially in period care, carry products that take centuries to biodegrade with pronounce.",
    },
    {
      name: "How to purchase our products",
      body: "Many brands, especially in period care, carry products that take centuries to biodegrade with pronounce.",
    },
  ];

  const slideUp = (elem) => {
    tl.to(elem, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
    });
  };

  const slideDown = (elem) => {
    tl.to(elem, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
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

  if (wrapperIntersection && wrapperIntersection.intersectionRatio < 0.5) {
    slideDown(".faq .text-content h4, .faq .text-content .questions .title");
    animateImageOut(".faq .image");
    zoomIn(".faq .image img");
  } else {
    slideUp(".faq .text-content h4, .faq .text-content .questions .title");
    animateImageIn(".faq .image");
    zoomOut(".faq .image img");
  }

  return (
    <div ref={wrapperRef} className="faq">
      <div className="image">
        <img src="/assets/images/product3.png" alt="" />
      </div>
      <div className="text-content">
        <h4>
          you have <span>questions,</span>
          <br />
          we have answers.
        </h4>
        <div className="questions">
          {data.map((item, i) => {
            return (
              <div key={i} className="title">
                <div onClick={() => setIndex(i)}>
                  <h6>{item.name}</h6>
                  <h6>{index === i ? "-" : "+"}</h6>
                </div>
                {index === i ? <p>{item.body}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
