import React from "react";
import BaseLayout from "../components/BaseLayout";

const Login = () => {
  return (
    <div className="portfolios_main_wrapper">
      <div className="container-fluid p-0 m-0">
        <div className="jumbotron">Login</div>
      </div>
    </div>
  );
};

export default BaseLayout(Login, "Login");
