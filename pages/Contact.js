import React, { useState, useRef } from "react";
import "../static/styles/_contactForm.scss";
import BaseLayout from "../components/BaseLayout";
import { Row, Col, Spinner } from "react-bootstrap";
import validator from "validator";
import fetch from "isomorphic-unfetch";
import { useSelector } from "react-redux";

function createHTMLMail(name, email, msg) {
  return `
    <br/><br/>
    &nbsp;&nbsp;&nbsp;<h3>New Email from: ${name.toUpperCase()}</h3>
    <h3>Email: ${email}</h3>
    <br/><br/>
    Message:
    <div>${msg}</div>
    

    <br/> <br/>
    `;
}

async function sendMail(data) {
  return fetch("/api/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      payload: { data }
    })
  })
    .then(r => r.json())
    .then(data => {
      return data;
    });
}

const Contact = () => {
  const [err, setError] = useState([]);
  const [isSendingEmail, setIsSendingEmail] = useState({
    msg: "Send Message",
    isSending: false
  });
  const ruduxStore = useSelector(state => state);
  // console.log(ruduxStore);
  const name = useRef("");
  const email = useRef("");
  const msg = useRef("");

  function onSubmit(e) {
    e.preventDefault();

    const errMsg = [];
    validator.isEmpty(name.current.value) && errMsg.push("Invalid Name");
    !validator.isEmail(email.current.value) && errMsg.push("Invalid Email");
    validator.isEmpty(msg.current.value) && errMsg.push("Empty Msg");
    if (errMsg.length === 0) {
      let data = {
        emailToAddress: "lucut_ovidiu@yahoo.com",
        emailSubject: "New Email from My PortFolio Website",
        emailMsg: createHTMLMail(
          name.current.value,
          email.current.value,
          msg.current.value
        )
      };
      setIsSendingEmail({
        msg: "Send Message",
        isSending: true
      });
      sendMail(data).then(data => {
        if (data.wasError === "true") {
          setIsSendingEmail({
            msg: "There was an internal server Error",
            isSending: false
          });
        } else {
          setIsSendingEmail({
            msg: "Message Sent",
            isSending: false
          });
          name.current.value = "";
          email.current.value = "";
          msg.current.value = "";
        }
      });
    } else setError(errMsg);
  }

  return (
    <BaseLayout tab="Contact">
      <div className="main_wrapper_contact">
        <div className="contact_form_main">
          <div className="contact_form_wrapper">
            <Row>
              <div
                className={
                  err.length > 0
                    ? "alert alert-danger contact_form_err_msg"
                    : "alert alert-danger contact_form_err_msg hidden"
                }
                role="alert"
              >
                {err[0]}
              </div>
            </Row>
            <h1 className="contact_form_title p-2">
              Contact <span style={{ color: "#01c851" }}>Me</span>
            </h1>
            <Col sm={{ span: 8, offset: 2 }} className="pt-4">
              <form onSubmit={onSubmit}>
                <div className="group">
                  <input type="text" required ref={name} />
                  {/* <span class="highlight" /> */}
                  <span className="bar" />
                  <label>Name</label>
                </div>

                <div className="group">
                  <input
                    type="text"
                    defaultValue={
                      ruduxStore.isAuthenticaticated
                        ? ruduxStore.loggedInUser
                        : ""
                    }
                    required
                    ref={email}
                  />
                  {/* <span class="highlight" /> */}
                  <span className="bar" />
                  <label>Email</label>
                </div>

                <textarea
                  className="input_text_area col"
                  rows="4"
                  placeholder="Message"
                  required
                  ref={msg}
                />
                <br />
                <br />
                <Row>
                  <Col md={{ span: 12, offset: 2 }}>
                    {!isSendingEmail.isSending ? (
                      <button className="btn btn-success" type="submit">
                        {isSendingEmail.msg}
                      </button>
                    ) : (
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    )}
                  </Col>
                </Row>
              </form>
            </Col>
            <br />
            <br />
          </div>
        </div>
      </div>
      <style jsx>{`
        // -------------- main wrapper -------------
        .main_wrapper_contact {
          position: relative;
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

export default Contact;
