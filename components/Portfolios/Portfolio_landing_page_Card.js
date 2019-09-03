import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { DELETE_PORTFOLIOS } from "../ReactContext/Actions";
import { fetchGraphQL } from "../HelperFunctions";

const Portfolio_landing_page_Card = ({ portfolio, auth, ReRender }) => {
  // const dispatch = useDispatch();

  function RemovePortfolio() {
    let confirmation = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmation) {
      const query = `mutation{
          RemovePortfolio(portfolioID: "${portfolio.id}",portfolioTitle:"${portfolio.title}")
          }`;
      const headers = {
        Authorization: auth.isAuthorized.jwt
      };
      fetchGraphQL(query, headers)
        .then(data => {
          data && ReRender(portfolio.id);
          // console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <Container className="portfolio_landing_page_wrapper mt-4">
        <Row>
          <Col
            className="portfolio_landing_page_card_wrapper bg-light p-3"
            md={5}
          >
            <img
              className="portfolio_landing_page_card_img"
              src={`${portfolio.thumbImage}`}
            />
          </Col>
          <Col className="portfolio_landing_page_card_details p-4" md={7}>
            <div className="portfolio_landing_page_card_details_title">
              <h5 className="portfolios_title">{portfolio.title}</h5>
              <div className="portfolio_landing_page_card_details_minidescription">
                <ul>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Short Description:{" "}
                    </span>
                    {portfolio.shortDescription}
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>
                      Tech Used: &nbsp;
                    </span>
                    {portfolio.technologiesUsed}
                  </li>
                </ul>
              </div>
              <div className="portfolio_landing_page_card_details_moreinfobtn">
                <a target="_blank" href={"/portfolio/" + portfolio.id}>
                  <Button variant="primary">More Info</Button>
                </a>
                {auth.isAuthorized.checkResult === "FOUND" &&
                  auth.isAuthorized.role === "admin" && (
                    <>
                      <Link href={"/editPortfolio/" + portfolio.id}>
                        <Button variant="secondary">Edit</Button>
                      </Link>
                      <Button onClick={RemovePortfolio} variant="danger">
                        Delete
                      </Button>
                    </>
                  )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio_landing_page_Card;
