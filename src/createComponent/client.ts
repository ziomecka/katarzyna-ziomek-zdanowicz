/* eslint-disable @typescript-eslint/no-var-requires */
require('./global');

const { classNames } = require('../classNames');
const { options } = require('./common');

const { buildCreateComponent }
  = require('render-it-client');

module.exports = buildCreateComponent({
  inject: { classNames },
  options,
  globals: { createComponent: true },
});
