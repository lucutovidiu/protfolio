import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const Portfolio_landing_page_Card = () => {
  return (
    <div className="portfolio_landing_page_wrapper mt-4">
      <div className="portfolio_landing_page_card">
        <img
          className="portfolio_landing_page_card_img"
          src="../../static/img/portofios_img/comenzi_magazine_app.JPG"
        />
        <div className="portfolio_landing_page_card_details">
          <div className="portfolio_landing_page_card_details_title">
            <h5>Stationary Orders - WebApp</h5>
          </div>
          <div className="portfolio_landing_page_card_details_minidescription">
            <ul>
              <li>
                The App Takes stationary Orders from the company's Superstores
                and centralize them to main office where orderes can be
                processed and more ...
              </li>
              <li>
                Technologies used: Node / Express, JavaScript / React, CSS /
                Bootstrap, GraphQL / MYSQL
              </li>
            </ul>
          </div>
          <div className="portfolio_landing_page_card_details_moreinfobtn">
            <Link href="/">
              <Button variant="contained" color="primary">
                More Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_landing_page_Card;
