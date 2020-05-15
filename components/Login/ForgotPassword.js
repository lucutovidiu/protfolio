import React from "react";
import {Col} from "react-bootstrap";

const ForgotPassword = props => {
	return (
		<>
			<Col xs={12}>
				<h4 style={{color: "#01c851"}} className="text-center">
					Recover Password
				</h4>
			</Col>
			<Col xs={12} className="pt-5">
				<div className="group">
					<input type="text" required/>
					{/* <span class="highlight" /> */}
					<span className="bar"/>
					<label>Email</label>
				</div>
			</Col>
			<Col xs={12} className="pb-2">
				<button className="btn btn-success" type="submit">
					Recover Password
				</button>
			</Col>
		</>
	);
};

export default ForgotPassword;
