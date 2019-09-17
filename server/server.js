require("dotenv").config();
const express = require("express");
const next = require("next");
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("./MongoDB/MongooseConnection");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./GraphQL/Schema");
const rootValue = require("./GraphQL/Resolvers");
const { GraphQLAuthRoute } = require("./GraphQL/auth/authMiddlewere");
const dev = process.env.NODE_ENV !== "production";
const SERVER_PORT = process.env.PORT || 3000;
const nextApp = next({ dev });
const nextRoutesHandler = nextApp.getRequestHandler();
const { saveGeoLocationToDatabase } = require("./ServerhelperFunctions");

nextApp
  .prepare()
  .then(() => {
    mongoose
      .connect()
      .then(() => {
        const expressApp = express();
        expressApp.use(bodyParser.urlencoded({ extended: false }));
        expressApp.use(bodyParser.json());
        expressApp.use(cors());

        // expressApp.use(express.static("../static"));

        expressApp.use(
          "/api/graphql",
          GraphQLAuthRoute,
          graphqlHTTP({
            ...schema,
            ...rootValue,
            graphiql: true
          })
        );

        expressApp.use(routes);

        expressApp.get("*", (req, res) => {
          if (req.url === "/") {
            saveGeoLocationToDatabase(req);
          }
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
  })
  .catch(err => {
    console.error(err);
  });
