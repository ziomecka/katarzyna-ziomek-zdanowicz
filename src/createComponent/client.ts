/* eslint-disable @typescript-eslint/no-var-requires */
require('./global');

const { classNames } = require('../classNames');
const { options } = require('./common');

module.exports = require('../library/client/')
  .buildCreateComponent({ classNames, options });

