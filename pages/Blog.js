import React from "react";
import BaseLayout from "../components/BaseLayout";
import useAuth from "../components/Auth/useAuth";
import { Spinner } from "react-bootstrap";

function Blog(props) {
  const state = useAuth();

  const auth = state.isAuthorized;
  if (!auth.checkingInProgress && auth.checkResult === "FOUND") {
    return (
      <BaseLayout tab="Blog">
        <div className="portfolios_main_wrapper">
          <div className="container-fluid p-0 m-0">
            <div className="jumbotron">Blog - Work In progress</div>
          </div>
        </div>
      </BaseLayout>
    );
  } else {
    return (
      <BaseLayout tab="Blog">
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

// function mapStateToProps(state) {
//   return {
//     auth: {
//       loggedInUser: state.loggedInUser,
//       isAuthenticaticated: state.isAuthenticaticated,
//       jwt: state.jwt
//     }
//   };
// }

export default Blog;
