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
      <div className="main_wrapper_login">
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
      <style jsx>{`
        // -------------- main wrapper -------------
        .main_wrapper_login {
          // position: relative;
          min-height: 100vh;
          // ------------------- gradient -----------------------
          // background-color: #485461;
          background: radial-gradient(
              circle closest-corner at center,
              rgba(34, 34, 34, 0.918),
              black 70%
            )
            no-repeat;
          // ------------------- gradient -----------------------

          // background-image: url(../img/portfolios_main3.jpg);
          // background-position: top;
          // background-repeat: no-repeat;
          // background-size: cover;
          //   margin-top: 70px;
        }
        // -------------- main wrapper -------------
      `}</style>
    </BaseLayout>
  );
};

export default Login;
