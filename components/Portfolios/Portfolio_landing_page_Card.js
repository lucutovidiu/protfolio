import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

const Portfolio_landing_page_Card = ({ portfolio }) => {
  return (
    <div className="portfolio_landing_page_wrapper mt-4">
      <div className="portfolio_landing_page_card">
        <img
          className="portfolio_landing_page_card_img"
          src="../../static/img/portofios_img/comenzi_magazine_app.JPG"
        />
        <div className="portfolio_landing_page_card_details">
          <div className="portfolio_landing_page_card_details_title">
            <h5>{portfolio.title}</h5>
          </div>
          <div className="portfolio_landing_page_card_details_minidescription">
            <ul>
              <li>{portfolio.shortDescription}</li>
              <li>{portfolio.technologiesUsed}</li>
            </ul>
          </div>
          <div className="portfolio_landing_page_card_details_moreinfobtn">
            <Link href={"/portfolio/" + portfolio.id}>
              <Button variant="secondary">More Info</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio_landing_page_Card;
