import React from "react";
import EditPortfolio from "../../components/Portfolios/EditPortfolio";
import BaseLayout from "../../components/BaseLayout";
import { withRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import useAuth from "../../components/Auth/useAuth";
import {
  fetchGraphQL,
  getPortofolioGraphQueryByID
} from "../../components/HelperFunctions";

function editPortfolio(props) {
  const state = useAuth();
  const auth = state.isAuthorized;
  //console.log(auth);
  const [portfolioData, setData] = React.useState(null);
  function fetchArticle() {
    const query = getPortofolioGraphQueryByID(props.router.query.id);
    fetchGraphQL(query)
      .then(data => {
        // console.log(data);
        setData({ ...data.GetPortfolio });
      })
      .catch(err => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    if (!auth.checkingInProgress && auth.checkResult === "FOUND")
      if (
        typeof props.router.query.id !== "undefined" &&
        auth.checkResult === "FOUND"
      )
        fetchArticle();
  }, [props.router.query.id, auth.checkResult]);
  if (!auth.checkingInProgress && auth.checkResult === "FOUND") {
    return (
      <BaseLayout tab="undefined">
        <EditPortfolio portfolioData={portfolioData} />
      </BaseLayout>
    );
  } else {
    return (
      <BaseLayout tab="Add New Portfolio">
        <div className="portfolios_main_wrapper">
          <div className="container w-50 mt-navBar">
            <div className="jumbotron text-center">
              {auth.checkingInProgress && auth.checkResult === "NOT_CHECKED" && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
              {!auth.checkingInProgress &&
                auth.checkResult === "NOT_FOUND" &&
                "You're Not Authorized to see this page !"}
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}
export default withRouter(editPortfolio);
