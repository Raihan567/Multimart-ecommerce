import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FormGroup, Row } from "reactstrap";
import login from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Login.css";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  return (
    <Helmet title="Signup">
      <section className="login__section">
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fs-bold text-center ">Sign-up</h3>
              <form className="auth__form">
                <FormGroup>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button
                  type="submit"
                  className="buy__btn auth__btn  text-center"
                >
                  Creat an account
                </button>
                <p className="mt-2">
                  Already have an account?{" "}
                  <Link className="text-decoration-none" to="/signup">
                    Please login here
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

export default Signup;
