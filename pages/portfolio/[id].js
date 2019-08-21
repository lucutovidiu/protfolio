import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import BaseLayout from "../../components/BaseLayout";
import { Jumbotron } from "react-bootstrap";
import { fetchGraphQL } from "../../components/HelperFunctions";

const PortfolioID = props => {
  const [portfolio, setPortfolio] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await fetchGraphQL(`{
        Portfolio(_id:"${props.router.query.id}"){
          title
          shortDescription
        }
      }`);
      setPortfolio({ ...data.Portfolio });
    }
    props.router.query.id && fetchData();
  }, [props.router.query.id]);
  //   console.log("port", portfolio);
  return (
    <BaseLayout>
      <Jumbotron>{portfolio.shortDescription}</Jumbotron>
    </BaseLayout>
  );
};

export default withRouter(PortfolioID);
