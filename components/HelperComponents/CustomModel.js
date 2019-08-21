import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const modalBackColor = "#383838";
const textColor = "white";

const CustomModel = props => {
  // console.log("here");
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header
          closeButton
          style={{
            backgroundColor: modalBackColor,
            color: textColor
          }}
        >
          <Modal.Title>{props.msgHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: modalBackColor, color: textColor }}
        >
          {props.msgBody.map((msg, key) => {
            return <div key={key}>{msg}</div>;
          })}
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: modalBackColor, color: textColor }}
        >
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModel;
