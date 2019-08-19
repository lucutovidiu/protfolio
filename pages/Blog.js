import React from "react";
import BaseLayout from "../components/BaseLayout";

const Blog = () => {
  return (
    <div className="portfolios_main_wrapper">
      <div className="container-fluid p-0 m-0">
        <div className="jumbotron">Blog</div>
      </div>
    </div>
  );
};

export default BaseLayout(Blog, "Blog");
