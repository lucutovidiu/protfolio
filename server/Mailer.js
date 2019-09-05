let mailer = require("nodemailer");
// let private = require("../private");
let smtpTransport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, //true for 465 port, false for other ports
  auth: {
    user: process.env.EmailUserName,
    pass: process.env.EmailPassword
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports.SendMail = data =>
  new Promise((res, rej) => {
    let mail = {
      from: "Portfolio Website <lucutovidiuwork@gmail.com>",
      to: data.emailToAddress,
      subject: data.emailSubject,
      text: data.emailMsg,
      html: data.emailMsg
    };

    smtpTransport.sendMail(mail, function(error, response) {
      if (error) {
        //res.send(JSON.stringify(error));
        res(error);
        smtpTransport.close();
      } else {
        rej(response);
        smtpTransport.close();
      }
    });
  });
