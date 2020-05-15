import React from "react";
import {Carousel} from "react-bootstrap";

const Carosel = props => {
	// console.log(props);
	return (
		<Carousel fade touch>
			{props.src.map((item, key) => {
				return (
					<Carousel.Item key={key}>
						<img
							style={{
								height: "100%",
								maxHeight: "80vh",
								display: "block",
								margin: "auto"

							}}
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
		</Carousel>
	);
};

export default Carosel;
