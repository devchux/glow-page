import React from "react";
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="navbar-content">
          <div className="logo abs-logo">
            <div>Glow</div>
            <div className="circle" />
          </div>
          <div className="nav-links">
            <div className="links">
              <ul>
                <li>Product</li>
                <li>About</li>
                <li>Blog</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="carts">
              <b>1</b>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
