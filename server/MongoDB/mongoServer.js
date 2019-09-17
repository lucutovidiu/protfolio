// const mongoose = require("./MongooseConnection");
require("dotenv").config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../GraphQL/Schema");
const rootValue = require("../GraphQL/Resolvers");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { Portfolio, User } = require("./Models");
const { GraphQLAuthRoute } = require("../GraphQL/auth/authMiddlewere");
const allowedGuestGraphQuery = ["Portfolio", "Portfolios"];

// const mongooseLocal = require("mongoose");
// const options = {
//   promiseLibrary: global.Promise,
//   useNewUrlParser: true
// };
// try {
//   var contents = fs.readFileSync("users.txt", "utf8");
//   let j = JSON.parse(contents);
//   mongoose.connect().then(() => {
//     // Portfolio.populate()
//     j.porfolios.forEach(async e => {
//       let p = new User(e);
//       await p.save();
//     });
//   });
// } catch (err) {
//   console.log(err);
// }
// mongooseLocal.set("useCreateIndex", true);
// let uri = "mongodb://127.0.0.1:27017/MyPortfolioApp";
// mongooseLocal.connect(uri, options).then(() => {
//   console.log("opened");

//   Portfolio.find({}).then(port => {
//     try {
//       fs.open("./portfolios.txt", "w", (err, fd) => {
//         let s = "Ovi";
//         let writetnb = fs.writeSync(fd, JSON.stringify({ porfolios: port }));
//         fs.closeSync(fd);
//         console.log("writert", writetnb);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   });
//   User.find({}).then(port => {
//     try {
//       fs.open("./users.txt", "w", (err, fd) => {
//         let s = "Ovi";
//         let writetnb = fs.writeSync(fd, JSON.stringify({ porfolios: port }));
//         fs.closeSync(fd);
//         console.log("writert", writetnb);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });

// const authRoute = (req, res, next) => {
//   const query = req.body.query;
//   let found = false;
//   if (query) {
//     for (let item of Object.values(allowedGuestGraphQuery)) {
//       if (query.toUpperCase().includes(item.toUpperCase())) {
//         found = true;
//       }
//     }
//   }
//   if (found) {
//     next();
//   } else {
//     try {
//       const token = jwt.verify(req.headers.jwt.trim(), "mysupersecret");
//       next();
//     } catch (err) {
//       res.status(401).send({ msg: "forbidden request" });
//     }
//   }
// };

const app = express();
const mongoose = require("../MongoDB/MongooseConnection");
mongoose.connect().then(() => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      ...schema,
      ...rootValue,
      graphiql: true
    })
  );
  //   const jwtToken = jwt.sign({ user: "Guest" }, "mysupersecret", {
  //     expiresIn: "1h"
  //   });
  // console.log("jwt: ", jwtToken);
  // console.log(
  //   path.join(
  //     path.resolve("ovi_port_website"),
  //     "static",
  //     "img",
  //     "portofios_img",
  //     "comenzi_magazine",
  //     "comenzi_magazine_thumb.JPG"
  //   )
  // );

  app.listen(3001, () => {
    console.log("listening grap");
  });
});

// let port1 = new Portfolio({
//   title: "Stationary Orders - WebApp",
//   shortDescription:
//     "The App Takes stationary Orders from the company's Superstores and centralize them to main office where orderes can be processed and more ...",
//   technologiesUsed:
//     "Technologies used: Node / Express, JavaScript / React, CSS / Bootstrap, GraphQL / MYSQL"
// });
// port1.save().then(data => {
//   console.log(port1);
// });
