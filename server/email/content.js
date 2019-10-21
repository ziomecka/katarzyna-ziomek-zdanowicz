require('dotenv').config();
const html = require('./content/');

const createContent = ({
  addressFrom,
  domainFrom,
  language,
  emailVariant,
  signatureVariant,
  link,
} = {}) => {
  if (
    !addressFrom ||
    !domainFrom ||
    !language ||
    !emailVariant ||
    !signatureVariant
  ) {
    console.warn('Create content: missing arguments'); // eslint-disable-line
  }

  return {
    from: `${ addressFrom }@${ domainFrom }`,
    ...html({
      emailVariant,
      signatureVariant,
      language,
      link,
    }),
  };
};

module.exports = createContent;
