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
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const nextApp = next({ dev });
const nextRoutesHandler = nextApp.getRequestHandler();
const expressApp = express();

nextApp
  .prepare()
  .then(() => {
    mongoose
      .connect()
      .then(() => {
        expressApp.use(bodyParser.urlencoded({ extended: false }));
        expressApp.use(bodyParser.json());
        expressApp.use(cors());

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
          return nextRoutesHandler(req, res);
        });

        expressApp.listen(SERVER_PORT, err => {
          if (err) console.log(err);
          else console.log("App started on port: ", SERVER_PORT);
        });
      })
      .catch(err => {
        console.error("mongo db connection failed");
      });
  })
  .catch(err => {
    console.error(err);
  });
