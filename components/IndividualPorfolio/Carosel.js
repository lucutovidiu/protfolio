import React from "react";
import { Carousel } from "react-bootstrap";

const Carosel = props => {
  // console.log(props);
  return (
    <Carousel fade touch>
      {props.src.map((item, key) => {
        return (
          <Carousel.Item key={key}>
            <img
              style={{
                objectFit: "cover"
              }}
              className="d-block w-100"
              src={item.image_src}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              <p
                style={{
                  color: "#2980b9",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  backgroundColor: "#ecf0f1",
                  display: "inline-block",
                  borderRadius: "10px",
                  padding: "0.3rem 0.5rem"
                }}
              >
                {item.image_description}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

      {/* <Carousel.Item>
        <img className="d-block w-100" src={props.src} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={props.src} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Carosel;
