import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/Ui/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/Ui/Clock";
const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularCategory = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProduct(filteredTrendingProducts);
    setBestSalesProduct(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularCategory);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section ml-0">
        <Container>
          <Row className="d-flex align-items-center justify-content-between">
            <Col lg="6" md="6" sm="12">
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
            <Col lg="6" md="6" sm="12">
              <div className="hero__img">
                <img src={heroImg} alt="heroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      {/* trending products  */}
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      {/* Best sales products  */}
      <section className="bestSales__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales Products</h2>
            </Col>
            <ProductList data={bestSalesProduct} />
          </Row>
        </Container>
      </section>

      {/* Time counter */}
      <section className="timer__counter ">
        <Container>
          <Row className="d-flex justify-content-between ">
            <Col lg="6" md="12" sm="12" className="col__center">
              <div className="clock__top-counter">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-4 ">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.1 }} className="store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" sm="12" className="text-end counter__image">
              <img className="img-fluid" src={counterImg} alt="counter image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* new arrivals */}
      <section className="new__arrival">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      {/* Popular category */}
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular Categories</h2>
            </Col>
            <ProductList data={popularProducts} />
            {/* <ProductList data={wirelessProducts} /> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
