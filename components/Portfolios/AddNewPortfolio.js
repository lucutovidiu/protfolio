import React from "react";
import {Button, Col, Container, Form, Jumbotron, Row, Spinner} from "react-bootstrap";
import MainForm, {MoreImages} from "./NewPortfolioForm/MainForm";
import validator from "validator";
import CustomModel from "../HelperComponents/CustomModel";
import {AddTimeStampToFileName} from "../HelperFunctions";

const AddNewPortfolio = props => {
	const initialState = {
		moreImages: [],
		title: "",
		shortDescription: "",
		technologiesUsed: "",
		thumbImage: "",
		fullDescription: "",
		projectStartDate: new Date(),
		projectEndDate: new Date()
	};
	const [formFields, setFormFields] = React.useState(initialState);
	const [showError, setShowError] = React.useState({
		show: false,
		msgBody: []
	});
	const [sendingPortfolio, setSendingPortfolio] = React.useState({
		isSending: false,
		response: ""
	});

	function handleClose() {
		setShowError({show: false, msgBody: []});
	}

	function onSubmit(e) {
		e.preventDefault();
		if (validate()) {
			const formData = new FormData();

			formFields.moreImages.length > 0 &&
			formFields.moreImages.forEach(image => {
				formData.append(
					"image_src",
					image.image_src,
					AddTimeStampToFileName(image.image_src.name)
				);
				formData.append("image_description", image.image_description);
			});
			formData.append(
				"thumbImage",
				formFields.thumbImage,
				AddTimeStampToFileName(formFields.thumbImage.name)
			);

			formData.append("PortfolioTitle", formFields.title);
			formData.append("shortDescription", formFields.shortDescription);
			formData.append("technologiesUsed", formFields.technologiesUsed);
			formData.append("fullDescription", formFields.fullDescription);
			formData.append("projectStartDate", formFields.projectStartDate);
			formData.append("projectEndDate", formFields.projectEndDate);
			let state = JSON.parse(window.sessionStorage.getItem("state"));
			formData.append("jwt", state.jwt);
			/*
	  {"done":true,"response":{"AddPortfolio":{"id":"5d6ad332feac6519844373ec"}}}
	  */
			setSendingPortfolio({isSending: true, response: ""});
			fetch("/api/fileUpload", {
				method: "POST",
				body: formData
			})
				.then(res => res.json())
				.then(result => {
					let res = JSON.parse(result);
					// console.log(res);
					setSendingPortfolio({
						isSending: false,
						response: res
					});
					setFormFields(initialState);
				})
				.catch(err => {
					console.log(err);
					setSendingPortfolio({
						isSending: false,
						response: "Error check console"
					});
					setFormFields(initialState);
				});
		}
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
			setShowError({show: true, msgBody: errorArray});
			return false;
		}
		return true;
	}

	return (
		<>
			<Container className="newPortfolio_wrapper">
				<Jumbotron>
					<Row>
						<Col md={{span: 7, offset: 3}}>
							<Form onSubmit={onSubmit}>
								<MainForm
									updateMainForm={updateMainForm}
									formFields={formFields}
								/>
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
								<br/>
								<br/>
								{!sendingPortfolio.isSending ? (
									sendingPortfolio.response === "" ? (
										<Button variant="success" type="submit">
											Submit Portfolio
										</Button>
									) : sendingPortfolio.response.done ? (
										<div className="p-3 mb-2 bg-success text-white">
											Portfolio successfully added
										</div>
									) : (
										<div className="p-3 mb-2 bg-warning text-dark">
											Error check console
										</div>
									)
								) : (
									<Spinner animation="border" role="status">
										<span className="sr-only">Loading...</span>
									</Spinner>
								)}
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
/*
{"done":true,"response":{"AddPortfolio":{"id":"5d6ad332feac6519844373ec"}}}
*/
export default AddNewPortfolio;
