import React from "react";
import { ReactComponent as SendIcon } from "assets/svg/send.svg";
import { ReactComponent as FbIcon } from "assets/svg/fb.svg";
import { ReactComponent as InstaIcon } from "assets/svg/insta.svg";
import { ReactComponent as LnIcon } from "assets/svg/ln.svg";
import { ReactComponent as TwitterIcon } from "assets/svg/tw.svg";
import "./footer.scss";

const Footer = () => {
  const links = [
    {
      name: "Company",
      links: ["About", "Jobs", "Branding", "Newsroom"],
    },
    {
      name: "Resources",
      links: ["College", "Support", "Safety", "StreamKit"],
    },
    {
      name: "Terms & Condition",
      links: ["Policy", "Faq", "Return & Delivery", "Tracking"],
    },
  ];
  const products = [
    {
      src: "/assets/images/product2.png",
      color: "#e6e6f1",
    },
    {
      src: "/assets/images/product3.png",
      color: "rgb(255, 113, 52)",
    },
    {
      src: "/assets/images/product2.png",
      color: "#e6e6f1",
    },
    {
      src: "/assets/images/product3.png",
      color: "rgb(255, 113, 52)",
    },
  ];
  return (
    <>
      <div className="showcase-wrapper">
        <div className="showcase">
          {products.map((item, i) => (
            <div
              key={i}
              style={{ backgroundColor: item.color }}
              data-aos="fade-left"
              data-aos-delay={`${50 * (i + 1)}`}
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div
            className="info"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <div className="logo">
              <div>Glow</div>
              <div className="circle" />
            </div>
            <p>
              Keep up with our new releases, beauty tips and what emma's been up
              to
            </p>
            <div className="socials">
              <FbIcon />
              <InstaIcon />
              <TwitterIcon />
              <LnIcon />
            </div>
          </div>
          {links.map((item, i) => (
            <div
              className="links"
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${150 * (i + 1)}`}
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <p>{item.name}</p>
              <ul>
                {item.links.map((str) => (
                  <li key={str}>{str}</li>
                ))}
              </ul>
            </div>
          ))}
          <div
            className="email"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
          >
            <p>Subscribe</p>
            <ul>
              <li>Get 10% off your first order</li>
            </ul>
            <div className="input">
              <input type="email" placeholder="Enter your email" />
              <button>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p>
            Copyright &copy; {new Date().getFullYear()} Musemind | All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
