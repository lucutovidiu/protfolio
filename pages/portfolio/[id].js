import React from "react";
import {withRouter} from "next/router";
import Carosel from "../../components/IndividualPorfolio/Carosel";
import {Container, Jumbotron} from "react-bootstrap";
import {fetchGraphQL} from "../../components/HelperFunctions";
import moment from "moment";

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
        httpAccessLink
        repoLink
        createdAt
        updatedAt
      }
    }
    `;
		fetchGraphQL(query)
			.then(data => {
				// console.log(data);
				setData({...data.GetPortfolio});
			})
			.catch(err => {
				console.log(err);
			});
	}

	// var date1 = moment("2016-10-08 10:29:23");
	// var date2 = moment("2016-10-08 11:06:55");
	// var diff = date2.diff(date1);
	// console.log(diff);
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
						<div className="portfolio_detail_start_dates">
							<p className="lead font-weight-bold">
								Duration :{" "}
								{moment(portfolioData.projectEndDate).diff(
									moment(portfolioData.projectStartDate),
									"weeks"
								)}{" "}
								Weeks
							</p>
							<div>
								<span className="font-weight-bold">From</span>{" "}
								{moment(portfolioData.projectStartDate).format("MMM Do YY")}
								&nbsp;&nbsp;
								<span className="font-weight-bold">To</span>{" "}
								{moment(portfolioData.projectEndDate).format("MMM Do YY")}
							</div>
							{portfolioData.httpAccessLink !== "" && (
								<div className="portfolio_detail_techUsed">
									<p className="lead font-weight-bold">
										Live website link:{" "}
										<a
											className="btn btn-light"
											target="_blank"
											href={portfolioData.httpAccessLink}
										>
											{portfolioData.title} Live
										</a>
									</p>
								</div>
							)}
							{portfolioData.repoLink !== "" && (
								<div className="portfolio_detail_techUsed">
									<p className="lead font-weight-bold">
										Github link:{" "}
										<a
											className="btn btn-light"
											target="_blank"
											href={portfolioData.repoLink}
										>
											{portfolioData.title} Github
										</a>
									</p>
								</div>
							)}

							<br/>
						</div>
					</div>
				</Container>
			)}
		</Container>

		// </BaseLayout>
	);
};

export default withRouter(PortfolioID);
