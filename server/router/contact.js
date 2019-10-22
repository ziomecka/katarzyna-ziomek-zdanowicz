const sendEmail = require('../email/');

const emailRegexp = /\w+/gi;
const nameRegexp = /\w+/gi;

const isValid = (email, regExp) => (
  regExp.test(email)
);

const handler = async ({ query }, res, next) => {
  const { email, name } = query;

  if (isValid(email, emailRegexp) && isValid(name, nameRegexp)) {
    try {
      await sendEmail({
        from: email,
        to: 'kasia@zdanowicz.org.pl',
        subject: `Contact: ${ name }, ${ email }`,
        text: 'Some email arrived',
      });
      res.send({ result: true });
    } catch (err) {
      res.send({
        result: false,
        err,
      });
    }
  } else {
    res.send({
      result: false,
      err: new Error('Invalid data'),
    });
  }

  next();
};

module.exports = handler;
