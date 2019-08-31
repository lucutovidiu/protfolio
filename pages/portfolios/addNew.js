import React from "react";
import BaseLayout from "../../components/BaseLayout";
import useAuth from "../../components/Auth/useAuth";
import { Spinner } from "react-bootstrap";
import AddNewPortfolio from "../../components/Portfolios/AddNewPortfolio";

const addNew = () => {
  const state = useAuth();
  //   console.log(state);
  const auth = state.isAuthorized;
  if (!auth.checkingInProgress && auth.checkResult === "FOUND") {
    return (
      <BaseLayout tab="Add New Portfolio">
        <AddNewPortfolio></AddNewPortfolio>
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
};

export default addNew;
