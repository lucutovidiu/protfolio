const { GraphQLClient } = require("graphql-request");
const {
  addImgToPortfolio,
  stringEscaping
} = require("../ServerhelperFunctions");
exports.AddNewPortfolio = async (req, res, next) => {
  let jwt = req.body.jwt;
  let responses = [];
  let timeStamp = new Date().getTime();
  let projDirName =
    req.body.PortfolioTitle.trim().replace(/ /gi, "_") + "_" + timeStamp;
  let projectDirectoryName = "../static/img/portfolios/" + projDirName;
  let thumbImageSrc = projectDirectoryName;
  let moreImagesData = "[";
  req.files.forEach((file, index) => {
    if (file.fieldname === "thumbImage") {
      let result = addImgToPortfolio(
        projDirName + "\\thumbImg",
        file.originalname,
        file.buffer
      );
      thumbImageSrc += "/thumbImg/" + file.originalname;
      responses.push(result.ok);
    }
    if (file.fieldname === "image_src") {
      let result = addImgToPortfolio(
        projDirName,
        file.originalname,
        file.buffer
      );
      responses.push(result.ok);
      moreImagesData += `{image_src:"${projectDirectoryName}/${file.originalname}",image_description:"${req.body.image_description[index]}"},`;
    }
  });
  moreImagesData = moreImagesData.substring(0, moreImagesData.length - 1) + "]";

  let addPortfolioGraph = `
    mutation {
      AddPortfolio(portfolioInput:
        {moreImages:${
          moreImagesData.trim().length === 1 ? "[]" : moreImagesData
        },
        title:"${req.body.PortfolioTitle}",
        shortDescription:"${req.body.shortDescription}",
        technologiesUsed:"${req.body.technologiesUsed}",
        thumbImage:"${thumbImageSrc}",
        fullDescription:"${stringEscaping(req.body.fullDescription)}",
        projectStartDate:"${req.body.projectStartDate}",
        rootDirectory:"${projectDirectoryName}",
        projectEndDate:"${req.body.projectEndDate}"}){
        id
      }
    }
    `;
  const client = new GraphQLClient("http://localhost:3000/api/graphql", {
    headers: {
      Authorization: jwt
    }
  });
  let result = "";
  try {
    result = await client.request(addPortfolioGraph);
    responses.push(true);
  } catch (err) {
    result = err;
    responses.push(false);
    console.log(err);
  }
  let finished = responses.every(item => item === true);
  res.status(200).json(JSON.stringify({ done: finished, response: result }));
};
