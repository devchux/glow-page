import gsap from "gsap";
import React, { useRef } from "react";
import { useIntersection } from "react-use";
import Product from "./Product";
import "./products.scss";

const Products = () => {
  const intersectionRef = useRef(null);
  const titleIntersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const tl = gsap.timeline();

  if (
    titleIntersection &&
    (titleIntersection.intersectionRatio < 0.5 ||
      titleIntersection.intersectionRatio > 1)
  ) {
    tl.to(".products .title", {
      y: 300,
      opacity: 0,
    }).to(".products #product", {
      x: 300,
      stagger: 0.1,
      opacity: 0,
    });
  } else {
    tl.to(".products .title", {
      y: 0,
      opacity: 1,
    }).to(".products #product", {
      x: 0,
      stagger: 0.1,
      opacity: 1,
    });
  }

  return (
    <div className="products">
      <div ref={intersectionRef}>
        <div className="title">
          <h4>
            trending on <span>essentials</span>
          </h4>
          <p>
            Made with nature's best ingredients - our product's transparent
            ingredient. Fear of God essentials.
          </p>
          <button>
            Browse all products <span>&rarr;</span>
          </button>
        </div>
        <Product
          src="/assets/images/product2.png"
          name="Shower Butter"
          price="190.09"
          id="product"
        />
        <Product
          src="/assets/images/product3.png"
          name="Shower Butter"
          price="190.09"
          id="product"
        />
      </div>
      <div>
        <Product
          src="/assets/images/product3.png"
          name="Shower Butter"
          price="190.09"
          id="product"
        />
        <Product
          src="/assets/images/product2.png"
          name="Shower Butter"
          price="190.09"
          id="product"
        />
        <Product
          src="/assets/images/product2.png"
          name="Shower Butter"
          price="190.09"
          id="product"
        />
      </div>
    </div>
  );
};

export default Products;
