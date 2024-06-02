
const accountSid = process.env.ACCOUNT_SID;
const authToken =process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.mobile_otp = async (phone_no, msg) => {
  client.messages
    .create({
      body: `${msg}`,
      from: "+12515125567",
      to: "+918222944567",
    })   
};
