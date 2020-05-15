import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

const UpcomingProject = ({portfolio}) => {
	//   console.log(portfolio);
	return (
		<div>
			<Container className="portfolio_landing_page_wrapper mt-4">
				<Row>
					{/* <Col
            className="portfolio_landing_page_card_wrapper bg-light p-3"
            md={5}
          >
            <img
              className="portfolio_landing_page_card_img"
              src={`${portfolio.thumbImage}`}
            />
          </Col> */}
					<Col className="portfolio_landing_page_card_details p-4" md={12}>
						<div className="portfolio_landing_page_card_details_title">
							<h5 className="portfolios_title">{portfolio.title}</h5>
							<div className="portfolio_landing_page_card_details_minidescription">
								<ul>
									<li>
                    <span style={{fontWeight: "bold"}}>
                      Short Description:{" "}
                    </span>
										{portfolio.shortDescription}
									</li>
									<li>
                    <span style={{fontWeight: "bold"}}>
                      Tech Used: &nbsp;
                    </span>
										{portfolio.technologiesUsed}
									</li>
								</ul>
							</div>
							<div className="portfolio_landing_page_card_details_moreinfobtn">
								<a target="_blank" href={portfolio.httpAccessLink}>
									<Button variant="primary">Visit Website</Button>
								</a>
								<a target="_blank" href={portfolio.repoLink}>
									<Button variant="primary">Visit Repo</Button>
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default UpcomingProject;
