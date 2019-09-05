const { Portfolio, User } = require("../MongoDB/Models");
const { GraphQLID } = require("graphql");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const private = require("../../private");
let fs = require("fs-extra");
const path = require("path");

var rootValue = {
  GetPortfolios: () => {
    return Portfolio.find({}).then(data => {
      // console.log(data);
      return data;
    });
  },
  GetPortfolio: _id => {
    return Portfolio.findOne({ _id }).then(data => {
      return data;
    });
  },
  AddPortfolio: async ({ portfolioInput }) => {
    try {
      let newPort = new Portfolio(portfolioInput);
      let data = await newPort.save();
      return data;
    } catch (err) {
      return err;
    }
  },
  EditPortfolio: async ({ portfolioInput, portfolioID }) => {
    try {
      let data = await Portfolio.findOneAndUpdate(
        { _id: portfolioID },
        portfolioInput
      );
      return data;
    } catch (err) {
      return err;
    }
  },
  RemovePortfolio: async ({ portfolioID, portfolioTitle }) => {
    try {
      let data = await Portfolio.findByIdAndDelete({ _id: portfolioID });
      // console.log("removed: ", data);
      // let projectName = portfolioTitle.trim().replace(/ /gi, "_");
      let staticPathToProjName = path.resolve(
        "../app/",
        data.rootDirectory.replace("../", "")
      );
      fs.remove(staticPathToProjName);
      if (data.deletedCount) return true;
      else return false;
    } catch (err) {
      return err;
    }
  },
  TryLogin: async ({ userEmail, password }) => {
    try {
      let user = await User.findOne({ userEmail: userEmail });
      if (user) {
        return bcrypt.compare(password, user.password).then(res => {
          // console.log(res);
          if (res) {
            const jwtToken = jwt.sign(
              { userEmail },
              process.env.JWTSecret || private.JWTSecret,
              {
                expiresIn: "1h"
              }
            );
            return JSON.stringify({ jwtToken, role: user.role, msg: "ok" });
          } else {
            return JSON.stringify({
              msg: "Invalid_Credentials",
              jwtToken: "undefined"
            });
          }
        });
      } else {
        return JSON.stringify({ msg: "No_User_Found", jwtToken: "undefined" });
      }
    } catch (err) {
      return err;
    }
  },
  GetUser: async ({ userEmail }) => {
    try {
      let user = await User.findOne({ userEmail: userEmail });
      return user;
    } catch (err) {
      return err;
    }
  },
  AddUser: ({ userInput }) =>
    new Promise((res, rej) => {
      return bcrypt.genSalt(10, function(err, salt) {
        return bcrypt.hash(userInput.password, salt, function(err, hash) {
          // try {
          let newUser = new User({ ...userInput, password: hash });
          //   let data = await newUser.save();
          return newUser
            .save()
            .then(data => {
              res(data);
            })
            .catch(err => {
              rej(err);
            });
          // } catch (err) {
          //   return err;
          // }
        });
      });
    })
};

module.exports = {
  rootValue
};
