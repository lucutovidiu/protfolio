let fs = require("fs");
const path = require("path");
exports.addImgToPortfolio = function(portfolioName, imageName, buffer) {
  let staticImg = path.resolve("static/img/portfolios");
  let portNamePath = path.join(staticImg, portfolioName);
  !fs.existsSync(portNamePath) &&
    fs.mkdirSync(portNamePath, { recursive: true });
  let fullPath = path.join(portNamePath, imageName);
  fs.writeFile(fullPath, buffer, err => {
    if (err) {
      console.log(err);
      return false;
    }
  });
  return { fullPath, ok: true };
};
exports.deleteOneImage = function(imageSrc) {
  let staticImg = path.resolve("../app/" + imageSrc.replace("..", ""));
  fs.unlinkSync(staticImg);
  return { ok: true };
};

exports.stringEscaping = function(string) {
  let finalString = "";
  for (let i of string) {
    if (i !== "\n" && i !== "\t" && i !== "\v") finalString += i;
    else finalString += " ";
  }
  return finalString;
};

// creates a graphql compatible query from a string,
// is like an array to string but not stringifying the keys
exports.createGraphQLQueryFromArray = function(array) {
  /*should look like:
  [{key:"value"},{key:"value"}]
  */
  if (array === null || typeof array !== "object" || array.length === 0) {
    return "[]";
  }

  let result = "[";
  let arrayKeys = Object.keys(array[0]);
  array.forEach(item => {
    result += "{";
    arrayKeys.forEach(key => {
      result += `${key}:"${item[key]}",`;
    });
    result = result.substr(0, result.length - 1) + "},";
  });
  result = result.substr(0, result.length - 1) + "]";

  return result;
};
