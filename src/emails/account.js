const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "crstuart@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app ${name}. Let me know how you like it!`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "crstuart@gmail.com",
    subject: "Sorry to See You Go",
    text: "We hate to lose a subscriber, was it something we said?"
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
