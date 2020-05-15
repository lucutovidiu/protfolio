import React from "react";
import {Col} from "react-bootstrap";

const SignUpComponent = props => {
	return (
		<>
			<Col xs={12}>
				<h4 style={{color: "#01c851"}} className="text-center">
					Signup
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
			<Col xs={12}>
				<div className="group">
					<input type="password" required/>
					{/* <span class="highlight" /> */}
					<span className="bar"/>
					<label>Password</label>
				</div>
			</Col>
			<Col xs={12}>
				<div className="group">
					<input type="password" required/>
					{/* <span class="highlight" /> */}
					<span className="bar"/>
					<label>Retype Password</label>
				</div>
			</Col>
			<Col xs={12} className="signup_btn">
				<button className="btn btn-success" type="submit">
					Signup
				</button>
				<button
					onClick={props.toggleLogin}
					className="btn btn-success ml-3"
					type="submit"
				>
					Login <i className="fas fa-long-arrow-alt-right"/>
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

export default SignUpComponent;
