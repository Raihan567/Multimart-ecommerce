import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/Product-details.css";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        image: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <div>
      <Helmet title={productName}>
        <CommonSection title={productName} />
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="6">
                <img src={imgUrl} alt="" />
              </Col>
              <Col lg="6">
                <div className="product__details">
                  <h2 className="mt-3">{productName}</h2>
                  <div className="product__rating d-flex  gap-3">
                    <div>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-half-s-fill"></i>
                      </span>
                    </div>
                    <p>
                      ( <span>{avgRating}</span> ratings){" "}
                    </p>
                  </div>
                  <span className="product__price">${price}</span>
                  <p className="mt-3">{shortDesc}</p>
                  <motion.button whileTap={{scale: 1.2}} onClick={addToCart} className="buy__btn">
                    Add to cart
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default ProductDetails;
