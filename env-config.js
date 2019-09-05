const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BASE_URL": prod
    ? "https://lucutovidiu.herokuapp.com/"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://lucutovidiu.herokuapp.com/",
  "process.env.EmailUserName": "lucutovidiuwork@gmail.com",
  "process.env.EmailPassword": "Teiubescisuse1988."
};
