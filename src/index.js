const otplib = require("otplib");

let previousSecret;

module.exports = (otpSecret) => {
  if(otpSecret) {
    previousSecret = otpSecret;
  }
  const secret = previousSecret;
  if(!secret) {
    throw new Error("No secret has been provided.");
  }

  return otplib.authenticator.generate(secret);
}
