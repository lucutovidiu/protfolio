import React from "react";
import "../../static/styles/_addNewPortfolio.scss";
import { Container, Form, Row, Col, Button, Jumbotron } from "react-bootstrap";
import MainForm, { MoreImages } from "./NewPortfolioForm/MainForm";
import validator from "validator";
import CustomModel from "../HelperComponents/CustomModel";
import { AddTimeStampToFileName } from "../HelperFunctions";

const AddNewPortfolio = () => {
  const [formFields, setFormFields] = React.useState({
    moreImages: [],
    title: "",
    shortDescription: "",
    technologiesUsed: "",
    thumbImage: "",
    fullDescription: "",
    projectStartDate: "",
    projectEndDate: ""
  });
  const [showError, setShowError] = React.useState({
    show: false,
    msgBody: []
  });
  function handleClose() {
    setShowError({ show: false, msgBody: [] });
  }
  function onSubmit(e) {
    e.preventDefault();
    // console.log(validate());
    let newFileName = AddTimeStampToFileName(
      formFields.moreImages[0].image_src.name
    );
    const formData = new FormData();
    formData.append(
      "moreImages",
      formFields.moreImages[0].image_src,
      newFileName
    );

    fetch("/api/fileUpload", {
      method: "POST",
      body: formData
    });
  }
  //updateting more images
  function updateMoreImg(fieldType, imgObjID, value) {
    let moreImages = formFields.moreImages.slice();
    switch (fieldType) {
      case "image_src":
        moreImages[imgObjID].image_src = value;
        break;
      case "image_description":
        moreImages[imgObjID].image_description = value;
        break;
    }
    setFormFields(state => {
      return {
        ...state,
        moreImages
      };
    });
    // console.log(imgObjID);
  }
  // upddating main form
  function updateMainForm(fieldType, value) {
    switch (fieldType) {
      case "title":
        setFormFields(state => {
          return {
            ...state,
            title: value
          };
        });
        break;
      case "shortDescription":
        setFormFields(state => {
          return {
            ...state,
            shortDescription: value
          };
        });
        break;
      case "technologiesUsed":
        setFormFields(state => {
          return {
            ...state,
            technologiesUsed: value
          };
        });
        break;
      case "thumbImage":
        setFormFields(state => {
          return {
            ...state,
            thumbImage: value
          };
        });
        break;
      case "fullDescription":
        setFormFields(state => {
          return {
            ...state,
            fullDescription: value
          };
        });
        break;
      case "projectStartDate":
        setFormFields(state => {
          return {
            ...state,
            projectStartDate: value
          };
        });
        break;
      case "projectEndDate":
        setFormFields(state => {
          return {
            ...state,
            projectEndDate: value
          };
        });
        break;
    }
  }
  //validating fiels input
  function validate() {
    /*
      take each field in the state and validate it
    */
    let errorArray = [];
    let keys = Object.keys(formFields);
    for (let r of keys) {
      if (typeof formFields[r] === "string") {
        validator.isEmpty(formFields[r].trim()) &&
          errorArray.push(`${r} can not be empty!!`);
      }
      if (r === "moreImages" && typeof formFields[r] === "object") {
        let objValues = Object.values(formFields[r]);
        objValues.forEach(img => {
          for (let i of Object.keys(img)) {
            if (typeof img[i] === "string")
              validator.isEmpty(img[i].trim()) &&
                errorArray.push(`${i} can not be empty!!`);
            else if (typeof img[i] === "object")
              !img[i].type.startsWith("image") &&
                errorArray.push(`${r} can only be an image!!`);
          }
        });
      }
      if (r === "thumbImage" && typeof formFields[r] === "object") {
        !formFields[r].type.startsWith("image") &&
          errorArray.push(`${r} can only be an image!!`);
        formFields[r].length === 0 &&
          errorArray.push(`${r} can not be empty!!`);
      }
    }
    if (errorArray.length > 0) {
      setShowError({ show: true, msgBody: errorArray });
      return false;
    }
    return true;
  }
  return (
    <>
      <Container className="newPortfolio_wrapper">
        <Jumbotron>
          <Row>
            <Col md={{ span: 7, offset: 3 }}>
              <Form onSubmit={onSubmit}>
                <MainForm updateMainForm={updateMainForm} />
                <div className="text-dark font-weight-bold pb-3">
                  More Images
                </div>
                {formFields.moreImages.map((item, key) => (
                  <div key={key}>{MoreImages(item.id, updateMoreImg)}</div>
                ))}
                <Button
                  variant="primary"
                  onClick={() => {
                    let newImgArray = [
                      ...formFields.moreImages,
                      {
                        id: formFields.moreImages.length,
                        image_src: "",
                        image_description: ""
                      }
                    ];

                    setFormFields({
                      ...formFields,
                      moreImages: newImgArray
                    });
                  }}
                >
                  Add More Images
                </Button>
                <br />
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      <CustomModel
        handleClose={handleClose}
        show={showError.show}
        msgBody={showError.msgBody}
      />
    </>
  );
};

export default AddNewPortfolio;
