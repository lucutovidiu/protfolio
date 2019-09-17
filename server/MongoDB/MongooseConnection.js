const mongoose = require("mongoose");
// const private = require("../../private");
const options = {
  promiseLibrary: global.Promise,
  useNewUrlParser: true
};
mongoose.set("useCreateIndex", true);
const uri = process.env.mlabURI;
module.exports.connect = () => mongoose.connect(uri, options);
// mongoose.connect("mongodb://127.0.0.1:27017/MyPortfolioApp", {
//   useNewUrlParser: true
// });

module.exports.mongoose = mongoose;
