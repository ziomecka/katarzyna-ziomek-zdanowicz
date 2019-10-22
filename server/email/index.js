require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({
  from,
  to,
  subject,
  text,
} = {}) => {

  try {
    await sgMail.send({ to, from, subject, text });
    return true;
  } catch(err) {
    return err;
  }
};

module.exports = sendEmail;
