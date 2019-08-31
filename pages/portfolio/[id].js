import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Carosel from "../../components/IndividualPorfolio/Carosel";
import BaseLayout from "../../components/BaseLayout";
import { Jumbotron, Container } from "react-bootstrap";
import { fetchGraphQL } from "../../components/HelperFunctions";
import "../../static/styles/_Portfolio_id.scss";

const PortfolioID = props => {
  const [portfolioData, setData] = React.useState(null);
  function fetchArticle() {
    const query = `
    {
      GetPortfolio(_id:"${props.router.query.id}"){
        id
        title
        shortDescription
        technologiesUsed
        thumbImage
        moreImages{
          image_src
          image_description
        }
        fullDescription
        projectStartDate
        projectEndDate
        createdAt
        updatedAt
      }
    }
    `;
    fetchGraphQL(query)
      .then(data => {
        setData({ ...data.GetPortfolio });
      })
      .catch(err => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (typeof props.router.query.id !== "undefined") fetchArticle();
  }, [props.router.query.id]);
  return (
    // <BaseLayout>
    <Container fluid className="bg-light portfolio_wrapper">
      <Container className="mt-3 portfolio_carosel">
        {portfolioData && <Carosel src={portfolioData.moreImages}></Carosel>}
      </Container>
      {portfolioData && (
        <Container>
          <div className="portfolio_detail">
            <div className="portfolio_detail_title">{portfolioData.title}</div>
            <div className="portfolio_detail_fullDescription">
              <p className="lead font-weight-bold">Full Description</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: portfolioData.fullDescription
                }}
              ></div>
            </div>
            <div className="portfolio_detail_techUsed">
              <p className="lead font-weight-bold">Tech Used</p>
              {portfolioData.technologiesUsed}
            </div>
          </div>
        </Container>
      )}
    </Container>

    // </BaseLayout>
  );
};

export default withRouter(PortfolioID);
