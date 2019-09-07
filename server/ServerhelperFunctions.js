let fs = require("fs");
const path = require("path");
const fetch = require("isomorphic-unfetch");
// const Mailer = require("./Mailer");
const { UserMessages } = require("./MongoDB/Models");

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

function getClientIPAddress(req) {
  return (
    (req.headers["x-forwarded-for"] || "").split(",").pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}
async function getGeoLocation(ip) {
  // https://ipapi.co/109.99.10.27/json/
  try {
    let data = await fetch(`https://ipapi.co/${ip}/json/`);
    let result = await data.json();
    return result;
  } catch (err) {
    console.log("GEO LOCATION ERROR: ", err);
  }
}

exports.sendContactMail = async (req, res) => {
  let geoLoc = await getGeoLocation(getClientIPAddress(req));
  let geoLocation = JSON.stringify(geoLoc);
  let msg = new UserMessages({
    message: JSON.stringify(req.body.payload.data),
    geoLocation: geoLocation,
    type: "EMAIL"
  });
  msg.save().then(() => {
    res.status(200).json(JSON.stringify({ wasError: "false" }));
  });
  // try {
  //   let response = await Mailer.SendMail(req.body.payload.data);
  //   // console.log(response);
  // } catch (err) {
  //   // console.log(err);
  //   res.status(200).json(JSON.stringify({ wasError: "false" }));
  // }
};

exports.saveGeoLocationToDatabase = async function(req) {
  let geoLoc = await getGeoLocation(getClientIPAddress(req));
  let geoLocation = JSON.stringify(geoLoc);
  if (!geoLoc.ip.includes("::1") && geoLocation.includes("country_name")) {
    let message = {
      geoLocation: geoLocation,
      type: "VISIT"
    };
    let msg = new UserMessages(message);
    msg.save();
  }
};

exports.GetAllMessages = async function() {
  try {
    return await UserMessages.find({});
  } catch (err) {
    return err;
  }
};
exports.DeleteUserMessage = async function(_id) {
  try {
    return await UserMessages.findOneAndDelete({ _id });
  } catch (err) {
    return err;
  }
};
