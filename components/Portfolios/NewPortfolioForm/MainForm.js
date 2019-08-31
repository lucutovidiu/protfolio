import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formSpacing = "pt-3 pb-3";
const MainForm = ({ updateMainForm }) => {
  return (
    <>
      <Form.Row>
        <Form.Group className={formSpacing} as={Col} controlId="formGridTitle">
          <Form.Control
            onChange={e => updateMainForm("title", e.target.value)}
            type="text"
            placeholder="Portfolio Title"
          />
          <Form.Label className="text-dark font-weight-bold ">
            Portfolio Title
          </Form.Label>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group
          className={formSpacing}
          as={Col}
          controlId="ShortDescription"
        >
          <Form.Control
            onChange={e => updateMainForm("shortDescription", e.target.value)}
            type="text"
            placeholder="Short Description"
          />
          <Form.Label className="text-dark font-weight-bold">
            <span className="">Short Description</span>
          </Form.Label>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group
          className={formSpacing}
          as={Col}
          controlId="TechnologiesUsed"
        >
          <Form.Control
            onChange={e => updateMainForm("technologiesUsed", e.target.value)}
            type="text"
            placeholder="Technologies Used"
          />
          <Form.Label className="text-dark font-weight-bold">
            <span className="">Technologies Used</span>
          </Form.Label>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group className={formSpacing} as={Col} controlId="thumbImage">
          <Form.Control
            onChange={e => updateMainForm("thumbImage", e.target.files[0])}
            type="file"
            placeholder="Thumbnail Image"
          />
          <Form.Label className="text-dark font-weight-bold">
            <span className="">Thumbnail Image</span>
          </Form.Label>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group
          className={formSpacing}
          as={Col}
          controlId="FullDescriptionHTML"
        >
          <Form.Control
            as="textarea"
            onChange={e => updateMainForm("fullDescription", e.target.value)}
            style={{ height: "10rem" }}
            placeholder="Full HTML Description "
          />
          <Form.Label className="text-dark font-weight-bold">
            {/* <span className="">Full Description HTML</span> */}
          </Form.Label>
        </Form.Group>
      </Form.Row>

      <Form.Group className={formSpacing} as={Col} controlId="projectStartDate">
        <Row>
          <Col sm={4}>
            <span className="datePickerLabel">Project Start Date</span>
          </Col>
          <Col sm={6}>
            <DatePicker
              onChange={e => updateMainForm("projectStartDate", e)}
              selected={new Date()}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className={formSpacing} as={Col} controlId="ProjectEndDate">
        <Row>
          <Col sm={4}>
            <span className="datePickerLabel">Project End Date</span>
          </Col>
          <Col sm={6}>
            <DatePicker
              onChange={e => updateMainForm("projectEndDate", e)}
              selected={new Date()}
            />
          </Col>
        </Row>
      </Form.Group>
    </>
  );
};

export default MainForm;

export function MoreImages(imgObjID, updateMoreImg) {
  return (
    <>
      <Form.Group as={Row} controlId="formImgSrc1">
        <Form.Label
          className="text-dark font-weight-bold margin-top-min-3"
          column
          sm="3"
        >
          Image SRC
        </Form.Label>
        <Col sm="9">
          <Form.Control
            onChange={e =>
              updateMoreImg("image_src", imgObjID, e.target.files[0])
            }
            type="file"
            placeholder="Image SRC"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formImgDesc2">
        <Form.Label
          className="text-dark font-weight-bold margin-top-min-3"
          column
          sm="3"
        >
          Image Description
        </Form.Label>
        <Col sm="9">
          <Form.Control
            onChange={e =>
              updateMoreImg("image_description", imgObjID, e.target.value)
            }
            type="text"
            placeholder="Image Description"
          />
        </Col>
      </Form.Group>
    </>
  );
}
