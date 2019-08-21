import React, { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import "../static/styles/_login.scss";
import LoginComponent from "../components/Login/LoginComponent";
import SignUpComponent from "../components/Login/SignUpComponent";
import ForgotPassword from "../components/Login/ForgotPassword";

const Login = () => {
  const [state, setState] = useState({
    loginComponent: true,
    signupComponent: false,
    forgotPassword: false
  });

  function toggleLogin() {
    setState({
      loginComponent: !state.loginComponent,
      signupComponent: !state.signupComponent
    });
  }

  function forgotPassword() {
    setState({ forgotPassword: true });
  }

  return (
    <BaseLayout tab="Login">
      <div className="portfolios_main_wrapper">
        <div className="container-fluid p-0 m-0 h-100">
          <div className="login_wrapper">
            {state.forgotPassword && <ForgotPassword />}
            {state.loginComponent && (
              <LoginComponent
                toggleLogin={toggleLogin}
                forgotPassword={forgotPassword}
              />
            )}
            {state.signupComponent && (
              <SignUpComponent
                toggleLogin={toggleLogin}
                forgotPassword={forgotPassword}
              />
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
