const allowedGuestGraphQuery = [
  "GetUpcomingPortfolios",
  "GetPortfolios",
  "GetPortfolio",
  "TryLogin"
];
const jwt = require("jsonwebtoken");
// const secret = require("../../../private");

exports.GraphQLAuthRoute = (req, res, next) => {
  const query = req.body.query;
  let found = false;

  if (query) {
    for (let item of Object.values(allowedGuestGraphQuery)) {
      if (query.toUpperCase().includes(item.toUpperCase())) {
        found = true;
      }
    }
  }

  if (found) {
    next();
  } else {
    try {
      const token = jwt.verify(
        req.headers.authorization,
        process.env.JWTSecret
      );
      if (token) next();
    } catch (err) {
      // console.log(err);
      // console.log("1**********************************************");
      res.status(401).send({ msg: "forbidden request" });
    }
  }
};
exports.JWTAuthRoute = (req, res, next) => {
  try {
    // const token = jwt.verify(req.headers.jwt.trim(), "mysupersecret");
    next();
  } catch (err) {
    // console.log("2**********************************************");
    res.status(401).send({ msg: "forbidden request" });
  }
};
