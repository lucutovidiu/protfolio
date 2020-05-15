const mongoose = require("./MongooseConnection").mongoose;
mongoose.set("useCreateIndex", true);

let PortImages = mongoose.Schema({
	image_src: !String,
	image_description: !String
});

module.exports.Portfolio = mongoose.model(
	"Portfolio",
	new mongoose.Schema(
		{
			title: {type: String, unique: true},
			shortDescription: !String,
			technologiesUsed: !String,
			thumbImage: !String,
			fullDescription: !String,
			moreImages: [!PortImages],
			projectStartDate: Date,
			projectEndDate: Date,
			httpAccessLink: {type: String, default: ""},
			repoLink: {type: String, default: ""},
			rootDirectory: !String
		},
		{timestamps: true}
	)
);
module.exports.User = mongoose.model(
	"User",
	new mongoose.Schema(
		{
			userName: {type: String, unique: true},
			userEmail: {type: String, unique: true},
			password: !String,
			role: !String
		},
		{timestamps: true}
	)
);
module.exports.UserMessages = mongoose.model(
	"UserMessages",
	new mongoose.Schema({
		message: !String,
		geoLocation: String,
		type: !String,
		timePageRequested: {type: Date, default: Date.now()}
	})
);
module.exports.UpcomingPortfolio = mongoose.model(
	"UpcomingPortfolio",
	new mongoose.Schema({
		title: {type: String, unique: true},
		shortDescription: !String,
		technologiesUsed: !String,
		httpAccessLink: {type: String, default: ""},
		projectStartDate: Date,
		repoLink: {type: String, default: ""}
	})
);

// new this.UpcomingPortfolio({
//   shortDescription:
//     "Upcoming project, ... an online shopping store! please check below:",
//   technologiesUsed:
//     "Express / NextJS, Javascript / ReactJS, HTML, CSS / Material-UI",
//   httpAccessLink: "https://my-eshopping.herokuapp.com/",
//   projectStartDate: "2019-09-06",
//   repoLink: "https://github.com/lucutovidiu/onlineshopping.git"
// }).save();
