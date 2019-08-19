import React from "react";
import BaseLayout from "../components/BaseLayout";
import Portfolio_landing_page_Card from "../components/Portfolios/Portfolio_landing_page_Card";

const Portfolios = () => {
  return (
    <div className="portfolios_main_wrapper m-0 p-0">
      <div className="portfolios_title">
        <h1>My Portfolios</h1>
      </div>
      <div className="portfolios_card_wrapper mb-0 p-3">
        <Portfolio_landing_page_Card />
      </div>
    </div>
  );
};

export default BaseLayout(Portfolios, "Protfolios");
