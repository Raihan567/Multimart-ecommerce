import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import login from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Login">
      <section className="login__section">
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fs-bold text-center ">Login</h3>
              <form className="auth__form">
                <FormGroup>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type="submit" className="buy__btn auth__btn  text-center">
                  Login
                </button>
                <p className="mt-2 ">
                  Don't have an account?{" "}
                  <Link className="text-decoration-none" to="/signup">
                    Create an account
                  </Link>
                </p>
              </form>
            </Col>
            {/* <Col lg="6  ">
              <div>
                <img src={login} alt="" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
