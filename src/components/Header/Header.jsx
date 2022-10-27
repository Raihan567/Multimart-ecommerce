import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./Header.css";
import { motion } from "framer-motion";

const nav__links = [
  {
    path: "/",
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
  {
    path: "login",
    display: "Login",
  },
];
const Header = () => {
  // const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const stickyHeaderFunc = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky__header");
  //     } else {
  //       headerRef.current.classList.remove("sticky__header");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   stickyHeaderFunc();
  //   return () => window.removeEventListener("scroll", stickyHeaderFunc);
  // });
  const toggleMenu = () => menuRef.current.classList.toggle("nav__active");
  return (
    <header className="header sticky-top bg-white">
      <Container>
        <Row>
          <div className="nav__wrapper ">
            {/* logo */}
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <Link className="text-decoration-none" to="/">
                <h1>Multimart</h1>
              </Link>
            </div>

            {/* Navigation */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="nav__link">
                <ul className="menu">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        // className={(navClass) =>
                        //   navClass.isActive ? "nav__active" : ""
                        // }
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
              {/* Mobile menu */}
              <div className="mobile__menu">
                <span onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
