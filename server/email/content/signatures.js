require('dotenv').config();
const email = require('../constants');

const regards = {
  pl: 'Pozdrawiam',
  en: 'Best regards',
};

const buildFunction = (language) => (
  ({ name = email.name } = {}) => {
    return (
      `<p>${ regards[language] }</p>` +
      `<p>${ name }</p>`
    );
  }
);

module.exports = {
  pl: {
    standard: buildFunction('pl'),
  },
  en: {
    standard: buildFunction('en'),
  },
};
