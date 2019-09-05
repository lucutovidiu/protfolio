const express = require("express");
const Router = express.Router();
const Mailer = require("./Mailer");
const jwt = require("jsonwebtoken");
// const secret = require("../private");
let multer = require("multer");

const { AddNewPortfolio } = require("./controller/AddPortfolioController");
const {
  EditPortfolioController
} = require("./controller/EditPortfolioController");

Router.post("/api/sendMail", async (req, res, next) => {
  try {
    let response = await Mailer.SendMail(req.body.payload.data);
    console.log(response);
    res.status(200).json(JSON.stringify({ wasError: "false" }));
  } catch (err) {
    console.log(err);
    res.status(200).json(JSON.stringify({ wasError: "false" }));
  }
});

Router.post("/api/fileUpload", multer().any(), (req, res, next) =>
  AddNewPortfolio(req, res, next)
);

Router.post("/api/editPorfolio", multer().any(), (req, res, next) =>
  EditPortfolioController(req, res, next)
);

Router.post("/api/CheckIfAuthenticated", (req, res) => {
  try {
    const verification = jwt.verify(req.body.jwtToken, process.env.JWTSecret);
    res.status(200).json(JSON.stringify({ isAuthorized: verification }));
  } catch (err) {
    res.status(401).json(JSON.stringify({ isAuthorized: err }));
  }
});

module.exports = Router;
