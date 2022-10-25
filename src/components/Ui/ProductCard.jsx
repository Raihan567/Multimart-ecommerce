import React from "react";
import { motion } from "framer-motion";
import productImg from "../../assets/images/arm-chair-01.jpg";
import "../../styles/ProductCard.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="3">
      <motion.div whileHover={{ scale: 1.08 }} className="product__item">
        <div className="product-img">
          <Link to={`/shop/${item.id}`}>
            <img src={item.imgUrl} alt="productImage" />
          </Link>
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__cart-bottom d-flex align-item-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.11 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
