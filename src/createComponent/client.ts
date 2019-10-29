/* eslint-disable @typescript-eslint/no-var-requires */
require('./global');

const { classNames } = require('../classNames');
const { options } = require('./common');

const { buildCreateComponent }
  = require('../../../just/devBundle/client/');

module.exports = buildCreateComponent({ classNames, options });
