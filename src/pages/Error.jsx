import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404! Page not found.</h2>
      <h4>
        <Link to="/">Back to home</Link>
      </h4>
    </div>
  );
};

export default Error;
