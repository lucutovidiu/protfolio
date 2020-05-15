const {GraphQLClient} = require("graphql-request");
const {
	addImgToPortfolio,
	stringEscaping,
	deleteOneImage,
	createGraphQLQueryFromArray
} = require("../ServerhelperFunctions");
exports.EditPortfolioController = async function (req, res, next) {
	let jwt = req.body.jwt;
	let responses = [];
	let portTitleRootDir = req.body.rootDirectory.split("/");
	let projDirName = portTitleRootDir[portTitleRootDir.length - 1];
	let projectDirectoryName = req.body.rootDirectory;
	let thumbImageSrc = "";
	let wasNewThumbnail = false;

	// build all more images array
	let allMoreImages = [];

	if (typeof req.body.origianlMoreImagesSRC === "string") {
		allMoreImages.push({
			image_src: req.body.origianlMoreImagesSRC,
			image_description: req.body.origianlMoreImagesDescription
		});
	}
	if (typeof req.body.origianlMoreImagesSRC === "object") {
		req.body.origianlMoreImagesSRC.forEach((imgsrc, index) => {
			allMoreImages.push({
				image_src: imgsrc,
				image_description: req.body.origianlMoreImagesDescription[index]
			});
		});
	}

	//looking for any new files
	req.files.forEach((file, index) => {
		//check for new thumbnail image file and add it to the portfolio directory
		if (file.fieldname === "thumbImage") {
			let result = addImgToPortfolio(
				projDirName + "\\thumbImg",
				file.originalname,
				file.buffer
			);
			thumbImageSrc = projectDirectoryName + "/thumbImg/" + file.originalname;
			responses.push(result.ok);
			wasNewThumbnail = true;
		}
		// add any new carosel images to the portfolio directory
		if (file.fieldname === "image_src") {
			let result = addImgToPortfolio(
				projDirName,
				file.originalname,
				file.buffer
			);
			let image_description =
				typeof req.body.image_description === "string"
					? req.body.image_description
					: req.body.image_description[index];
			allMoreImages.push({
				image_src: `${projectDirectoryName}/${file.originalname}`,
				image_description
			});
			responses.push(result.ok);
		}
	});
	wasNewThumbnail && deleteOneImage(req.body.thumbImageOriginal);

	//deleting from directory any new files marked as deleted
	if (req.body.deletedMoreImages) {
		if (typeof req.body.deletedMoreImages === "string") {
			deleteOneImage(req.body.deletedMoreImages);
			allMoreImages = allMoreImages.filter(
				img => img.image_src !== req.body.deletedMoreImages
			);
		}
		if (typeof req.body.deletedMoreImages === "object") {
			req.body.deletedMoreImages.forEach(img => {
				deleteOneImage(img);
				allMoreImages = allMoreImages.filter(i => i.image_src !== img);
			});
		}
	}

	//get more images compatible graph query
	allMoreImages = createGraphQLQueryFromArray(allMoreImages);

	// console.log("-----all images -----", allMoreImages);

	let editPortfolioGraph = `
    mutation {
      EditPortfolio(portfolioInput:
        {moreImages:${allMoreImages},
        title:"${req.body.PortfolioTitle}",
        shortDescription:"${req.body.shortDescription}",
        technologiesUsed:"${req.body.technologiesUsed}",
        thumbImage:"${
		thumbImageSrc !== "" ? thumbImageSrc : req.body.thumbImageOriginal
		}",
        fullDescription:"${stringEscaping(req.body.fullDescription)}",
        projectStartDate:"${req.body.projectStartDate}",
        projectEndDate:"${req.body.projectEndDate}"},portfolioID:"${
		req.body.portfolioID
		}"){
        id
      }
    }
    `;
	const client = new GraphQLClient(process.env.BASE_URI + "/api/graphql", {
		headers: {
			Authorization: jwt
		}
	});
	let result = "";
	try {
		result = await client.request(editPortfolioGraph);
		responses.push(true);
	} catch (err) {
		result = err;
		responses.push(false);
		console.log(err);
	}
	let finished = responses.every(item => item === true);
	res.status(200).json(JSON.stringify({done: finished, response: result}));
	//console.log(editPortfolioGraph);
};
