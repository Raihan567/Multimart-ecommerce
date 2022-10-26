import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./Header.css";
import { motion } from "framer-motion";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "shop",
    display: "Shop",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <div className="logo">
              <img src={Logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            {/* Navigation */}
            <div className="navigation">
              <div className="nav__link">
                <ul className="menu">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nav Icon */}
            <div className="nav__icon">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">0</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">10</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>
            {/* Mobile menu */}
            <div className="mobile__menu">
              <span className="">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
