import React from "react";
import BaseLayout from "../components/BaseLayout";
import Portfolio_landing_page_Card from "../components/Portfolios/Portfolio_landing_page_Card";
import { fetchGraphQL } from "../components/HelperFunctions";

const Portfolios = ({ props }) => {
  // console.log(props);
  return (
    <div className="portfolios_main_wrapper m-0 p-0">
      <div className="portfolios_title">
        <h1>My Portfolios</h1>
      </div>
      <div className="portfolios_card_wrapper mb-0 p-3">
        {props.Portfolios.map((portfolio, id) => {
          return (
            <Portfolio_landing_page_Card
              key={id}
              title={portfolio.title}
              shortDescription={portfolio.shortDescription}
              technologiesUsed={portfolio.technologiesUsed}
            />
          );
        })}
      </div>
    </div>
  );
};

const getInitialProps = async ({ req }) => {
  const data = await fetchGraphQL(`{
    Portfolios{    
    title
      shortDescription
      technologiesUsed
    }
    }`);
  return { ...data };
};

export default BaseLayout(Portfolios, "Protfolios", getInitialProps);
