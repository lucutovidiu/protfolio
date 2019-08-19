const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const nextApp = next({ dev });
const nextRoutesHandler = nextApp.getRequestHandler();
const expressApp = express();

nextApp
  .prepare()
  .then(() => {
    expressApp.get("*", (req, res) => {
      return nextRoutesHandler(req, res);
    });

    expressApp.listen(SERVER_PORT, err => {
      if (err) console.log(err);
      else console.log("App started on port: ", SERVER_PORT);
    });
  })
  .catch(err => {
    console.error(err);
  });
