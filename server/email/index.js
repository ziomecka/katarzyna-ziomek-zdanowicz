// https://developers.sparkpost.com/
// https://developers.sparkpost.com/api/smtp/#header-client-configuration
require('dotenv').config();
const SparkPost = require('sparkpost');
const createContent = require('./content');
const email = require('./constants');
const sparky = new SparkPost(process.env.SPARKPOST_API_KEY);

const sendEmail = async (options) => {
  const {
    emailVariant,
    recipients,
    addressFrom = email.addressFrom,
    domainFrom = email.domain,
    language = 'pl',
    signatureVariant = 'standard',
    link, // optional
  } = Object(options);

  const _options = { 'inline_css': false };

  try {
    await sparky.transmissions.send({
      options: _options,
      content: createContent({
        emailVariant,
        addressFrom,
        domainFrom,
        language,
        signatureVariant,
        link,
      }),
      recipients,
    });
  } catch (err) {
    return err;
  }
};

module.exports = sendEmail;
