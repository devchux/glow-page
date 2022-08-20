import Footer from "components/footer";
import { Fragment, useEffect, useLayoutEffect } from "react";
import About from "components/about";
import Companies from "components/companies";
import Faq from "components/faq";
import Header from "components/header";
import Metrics from "components/metrics";
import Navbar from "components/nav/navbar";
import Products from "components/products";
import Testimonials from "components/testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const tl = gsap.timeline();

  useLayoutEffect(() => {
    // gsap.fromTo(
    //   ".bg-overlay",
    //   {
    //     top: 0,
    //     bottom: 0,
    //     width: "100%",
    //     height: "100%",
    //     right: 0,
    //     zIndex: 1,
    //   },
    //   {
    //     bottom: 'auto',
    //     right: 0,
    //     zIndex: -1,
    //     height: 700,
    //     width: "70%",
    //     top: 765,
    //     duration: 3,
    //   }
    // );
    tl.from(".abs-logo", {
      left: "30%",
      delay: 1,
    })
      .from(".abs-logo .circle", {
        rotateZ: 0,
        duration: 0.2,
      })
      .to(".abs-logo .circle", {
        rotateZ: "360deg",
        duration: 0.2,
      })
      .to(".abs-logo > div:first-child", {
        opacity: 1,
      })
      .to(".abs-logo .circle", {
        width: 16,
        height: 16,
        borderRadius: "50%",
      })
      .to(
        ".abs-logo",
        {
          fontSize: "1.5rem",
        },
        "+=0"
      )
      .to(".abs-logo", {
        left: (window.screen.width - 1280) / 2,
        top: 24,
        ease: "power3.out",
      })
      .to(".abs-logo", {
        position: "static",
      })
      .to(".bg-overlay", {
        right: 0,
        zIndex: -1,
        height: 700,
        width: "70%",
        top: 765,
      })
      .to(".layout", {
        display: "block",
      })
      .to("body", {
        overflowY: "auto",
      })
      .from(".left-content, header .img-wrapper", {
        y: document.querySelector("header .left-content").getBoundingClientRect()
          .height,
        opacity: 0,
      }, "-=1");
  }, [tl]);
  return (
    <Fragment>
      <div className="bg-overlay" />
      <Navbar />
      <div className="lay0out">
        <Header />
        <About />
        <Products />
        <Metrics />
        <Faq />
        <Testimonials />
        <Companies />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
