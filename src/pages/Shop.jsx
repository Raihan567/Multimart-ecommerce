import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import ProductList from "../components/Ui/ProductList";
import "../styles/shop.css";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filterProducts);
    }
    if (filterValue === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "watch") {
      const filterProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setProductsData(searchProduct);
  };

  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Products" />

      <Container>
        <Row className="my-5">
          <Col lg="3" md="3" sm="6">
            <div className="filter__widget text-center ">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3" sm="6">
            <div className="filter__widget text-center ">
              <select>
                <option disabled>Sort By Order</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="search__box ">
              <input
                type="text"
                placeholder="Search what you need..."
                onChange={handleSearch}
              />
              <span>
                <i className="ri-search-line "></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-3">No Products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
