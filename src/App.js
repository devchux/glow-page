import Footer from "components/footer";
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
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
  const [startPage, setStartPage] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const tl = gsap.timeline({ onComplete: () => setStartPage(true) });

  useLayoutEffect(() => {
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
      .to("body", {
        overflowY: "auto",
      });
  }, [tl]);

  useEffect(() => {
    if (startPage) {
      gsap.fromTo(
        ".left-content, header .img-wrapper",
        {
          y: 770,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        "-=6.25"
      );
    }
  }, [startPage]);
  return (
    <Fragment>
      <div className="bg-overlay" />
      {startPage && (
        <>
          <Navbar />
          <Header />
          <About />
          <Products />
          <Metrics />
          <Faq />
          <Testimonials />
          <Companies />
          <Footer />
        </>
      )}
    </Fragment>
  );
}

export default App;
