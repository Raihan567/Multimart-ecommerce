import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm='12'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalist & modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet dicta commodi assumenda tenetur deleniti eaque nemo
                  exercitationem, nobis facilis fugit eos similique debitis
                  eligendi molestias voluptate nihil qui repudiandae asperiores.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            {/* Hero image */}
            <Col lg="6" md="6" sm='12'>
              <div className="hero__img">
                <img src={heroImg} alt="heroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
