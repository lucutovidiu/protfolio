import React, { useRef, useState, useContext } from "react";
import { Col } from "react-bootstrap";
import { fetchGraphQL } from "../HelperFunctions";
import CustomModel from "../HelperComponents/CustomModel";
import validator from "validator";
import { useDispatch } from "react-redux";

const LoginComponent = props => {
  const dispatch = useDispatch();
  const userEmail = useRef("");
  const password = useRef("");
  const [modal, setModel] = useState({
    showModal: false,
    msgHeader: "",
    msgBody: []
  });

  const handleClose = () =>
    setModel({
      showModal: false,
      msgHeader: "",
      msgBody: []
    });
  const handleShow = (msgHeader, msgBody) =>
    setModel({
      showModal: true,
      msgHeader,
      msgBody
    });

  function fetchUser() {
    const query = `
    {
      TryLogin(userEmail:"${userEmail.current.value}",password: "${password.current.value}")
      }
    `;
    fetchGraphQL(query)
      .then(data => {
        try {
          let { msg, jwtToken, role } = JSON.parse(data.TryLogin);
          if (msg === "ok") {
            dispatch({
              type: "AUTH_USER",
              payload: {
                loggedInUser: userEmail.current.value,
                jwt: jwtToken,
                role
              }
            });
            window.location = "/";
            // handleShow("Success", ["you're logged in"]);
          } else {
            handleShow("Error", ["Username or password incorect!!"]);
          }
        } catch (err) {
          handleShow("Error", ["Internal Error"]);
        }
        // if (msg === "ok") {
        //   console.log(jwtToken);
        // }
      })
      .catch(err => {
        console.log(err);
        handleShow("Error", ["Username or password incorect!!"]);
      });
  }

  function loginMe() {
    let errMsg = [];
    if (!validator.isEmail(userEmail.current.value))
      errMsg.push("Invalid Email");
    if (validator.isEmpty(password.current.value))
      errMsg.push("Password can not be Empty");

    if (errMsg.length > 0) {
      handleShow("Error", errMsg);
    } else {
      fetchUser();
    }
  }

  return (
    <>
      <CustomModel
        show={modal.showModal}
        handleClose={handleClose}
        msgHeader={modal.msgHeader}
        msgBody={modal.msgBody}
      />
      <Col xs={12}>
        <h4 style={{ color: "#01c851" }} className="text-center">
          Login
        </h4>
      </Col>
      <Col xs={12} className="pt-5">
        <div className="group">
          <input type="text" required ref={userEmail} />
          {/* <span class="highlight" /> */}
          <span className="bar" />
          <label>Email</label>
        </div>
      </Col>
      <Col xs={12}>
        <div className="group">
          <input type="password" required ref={password} />
          {/* <span class="highlight" /> */}
          <span className="bar" />
          <label>Password</label>
        </div>
      </Col>
      <Col xs={12} className="pt-3">
        <button onClick={loginMe} className="btn btn-success" type="submit">
          Login
        </button>
        <button
          onClick={props.toggleLogin}
          className="btn btn-success ml-3"
          type="submit"
        >
          Signup <i className="fas fa-long-arrow-alt-right" />
        </button>
      </Col>
      <Col xs={12} className="mt-3">
        <button
          onClick={props.forgotPassword}
          className="btn btn-outline-ligh"
          type="submit"
        >
          Forgot Password
        </button>
      </Col>
    </>
  );
};

export default LoginComponent;
