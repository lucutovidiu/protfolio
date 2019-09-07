/*
client id
795578361886-fepgu6c348p2tv524s11pice661lt07d.apps.googleusercontent.com
client secret
JUQ7A2vOz7BQduSs27Fdm4_6
refreshtoken
1/ynWnOmVWv2eCcp9S-n2g77MMIMkAHZvVhXtJCDZENPY


*/

let mailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// let private = require("../private");
// let smtpTransport = mailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true, //true for 465 port, false for other ports
//   auth: {
//     user: process.env.EmailUserName,
//     pass: process.env.EmailPassword
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// module.exports.SendMail = data =>
//   new Promise((res, rej) => {
//     let mail = {
//       from: "Portfolio Website <lucutovidiuwork@gmail.com>",
//       to: data.emailToAddress,
//       subject: data.emailSubject,
//       text: data.emailMsg,
//       html: data.emailMsg
//     };

//     smtpTransport.sendMail(mail, function(error, response) {
//       // console.log("--UserName--:", process.env.EmailUserName);
//       // console.log("--Password--:", process.env.EmailPassword);
//       if (error) {
//         //res.send(JSON.stringify(error));
//         res(error);
//         smtpTransport.close();
//       } else {
//         rej(response);
//         smtpTransport.close();
//       }
//     });
//   });

exports.SendGMailMail = data => {
  const oauth2Client = new OAuth2(
    "795578361886-fepgu6c348p2tv524s11pice661lt07d.apps.googleusercontent.com", // ClientID
    "JUQ7A2vOz7BQduSs27Fdm4_6", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );
  oauth2Client.setCredentials({
    refresh_token: "1/ynWnOmVWv2eCcp9S-n2g77MMIMkAHZvVhXtJCDZENPY"
  });
  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "lucutovidiu@gmail.com",
      clientId:
        "795578361886-fepgu6c348p2tv524s11pice661lt07d.apps.googleusercontent.com",
      clientSecret: "JUQ7A2vOz7BQduSs27Fdm4_6",
      refreshToken: "1/ynWnOmVWv2eCcp9S-n2g77MMIMkAHZvVhXtJCDZENPY",
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: "lucutovidiu@gmail.com",
    to: "lucut_ovidiu@yahoo.com",
    subject: data.emailSubject,
    generateTextFromHTML: true,
    html: data.emailMsg
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
  });
};
