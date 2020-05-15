const mailer = require("nodemailer");

exports.SendMail = data =>
	new Promise((res, rej) => {
		var transporter = mailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EmailUserName,
				pass: process.env.EmailPassword
			}
		});

		let mailOptions = {
			from: process.env.EmailFromUserName,
			to: process.env.EmailToUserName,
			subject: data.emailSubject,
			text: data.emailMsg,
			html: data.emailMsg
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				console.log("err:", err);
				rej("Error Sending Email");
			} else {
				res("Email SENT");
				// console.log("email send:", info);
			}
		});
	});
