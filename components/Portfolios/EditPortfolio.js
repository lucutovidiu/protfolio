import React from "react";
import {Button, Col, Container, Form, Jumbotron, Row, Spinner} from "react-bootstrap";
import MainForm, {DeleteMoreImages, MoreImages} from "./NewPortfolioForm/MainForm";
import validator from "validator";
import CustomModel from "../HelperComponents/CustomModel";
import {AddTimeStampToFileName} from "../HelperFunctions";

const EditPortfolio = ({portfolioData}) => {
	const initialState = {
		moreImages: [],
		moreDeletedImages: [],
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
	// console.log(portfolioData);
	React.useEffect(() => {
		if (portfolioData !== null) {
			setFormFields({
				moreImages: [],
				moreDeletedImages: [],
				title: portfolioData.title,
				shortDescription: portfolioData.shortDescription,
				technologiesUsed: portfolioData.technologiesUsed,
				thumbImage: {path: "..\\..\\" + portfolioData.thumbImage},
				fullDescription: portfolioData.fullDescription,
				projectStartDate: new Date(portfolioData.projectStartDate),
				projectEndDate: new Date(portfolioData.projectEndDate)
			});
		}
	}, [portfolioData]);

	function handleClose() {
		setShowError({show: false, msgBody: []});
	}

	function onSubmit(e) {
		e.preventDefault();
		if (validate()) {
			// console.log(formFields);
			const formData = new FormData();
			formData.append("PortfolioTitle", formFields.title);
			formData.append("shortDescription", formFields.shortDescription);
			formData.append("technologiesUsed", formFields.technologiesUsed);
			formData.append("fullDescription", formFields.fullDescription);
			formData.append("projectStartDate", formFields.projectStartDate);
			formData.append("projectEndDate", formFields.projectEndDate);
			formData.append("portfolioID", portfolioData.id);
			formData.append("rootDirectory", portfolioData.rootDirectory);
			//send any new more images for carosel
			formFields.moreImages.length > 0 &&
			formFields.moreImages.forEach(image => {
				formData.append(
					"image_src",
					image.image_src,
					AddTimeStampToFileName(image.image_src.name)
				);
				formData.append("image_description", image.image_description);
			});
			//send new thumbnail image if it was changed
			if (!formFields.thumbImage.path) {
				formData.append(
					"thumbImage",
					formFields.thumbImage,
					AddTimeStampToFileName(formFields.thumbImage.name)
				);
			}
			//sending the original thumbnail
			formData.append("thumbImageOriginal", portfolioData.thumbImage);

			//send images that were delated from more images in portfolio
			if (formFields.moreDeletedImages.length > 0) {
				formFields.moreDeletedImages.forEach(delImg => {
					formData.append("deletedMoreImages", delImg.image_src);
				});
			}
			//send origianl more images
			// console.log(portfolioData.moreImages);
			if (portfolioData.moreImages.length > 0) {
				portfolioData.moreImages.forEach(img => {
					formData.append("origianlMoreImagesSRC", img.image_src);
					formData.append(
						"origianlMoreImagesDescription",
						img.image_description
					);
				});
			}

			let state = JSON.parse(window.sessionStorage.getItem("state"));
			formData.append("jwt", state.jwt);
			setSendingPortfolio({isSending: true, response: ""});

			fetch("/api/editPorfolio", {
				method: "POST",
				body: formData
			})
				.then(res => res.json())
				.then(result => {
					let res = JSON.parse(result);
					window.location = "/editPortfolio/" + portfolioData.id;
					// console.log(res);
					// setSendingPortfolio({
					//   isSending: false,
					//   response: res
					// });
					// setFormFields(initialState);
				})
				.catch(err => {
					console.log(err);
					setSendingPortfolio({
						isSending: false,
						response: "Error check console"
					});
					// setFormFields(initialState);
				});
		}
	}

	//updating deleted images
	function deteleImagesFromMoreImages(image) {
		setFormFields(state => ({
			...state,
			moreDeletedImages: [...state.moreDeletedImages, image]
		}));
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
		}
		if (errorArray.length > 0) {
			setShowError({show: true, msgBody: errorArray});
			return false;
		}
		return true;
	}

	// console.log(formFields);
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
								<div>
									{portfolioData &&
									portfolioData.moreImages
										.filter(img => {
											return !formFields.moreDeletedImages.find(
												i => i.image_src === img.image_src
											)
												? true
												: false;
										})
										.map((img, key) => (
											<DeleteMoreImages
												key={key}
												image={img}
												deteleImagesFromMoreImages={
													deteleImagesFromMoreImages
												}
											/>
										))}
								</div>
								<div className="text-dark font-weight-bold pb-3">
									Add More Images to your portfolio
								</div>
								{formFields.moreImages.map((item, key) => (
									<div key={key}>
										{MoreImages(item.id, updateMoreImg, item)}
									</div>
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
								<Button
									variant="primary"
									className="ml-sm-3 mt-xs-2"
									onClick={() => {
										if (formFields.moreImages.length > 0) {
											let lastImage = formFields.moreImages.slice().pop();
											setFormFields(state => ({
												...state,
												moreImages: state.moreImages.filter(
													img => img != lastImage
												)
											}));
										}
									}}
								>
									Remove Last Image
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
											Portfolio successfully Edited
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
export default EditPortfolio;
