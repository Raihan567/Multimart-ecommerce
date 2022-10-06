import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={Logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                <p>Since 1995</p>
              </div>
            </div>
            {/* Navigation */}

            <div className="navigation">
              <div className="nav__link">
                <ul className="menu">
                  <li>
                    <NavLink className="text-decoration-none text-dark" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/shop"
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/cart"
                    >
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* Nav Icon */}
            <div className="nav__icon">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
              </span>
              <span>
                <img src={userIcon} alt="" />
              </span>
            </div>
            {/* Mobile menu */}
            <div className="mobile__menu">
              <span className="">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
