/* eslint-disable quotes */
require('dotenv').config();

const getCspDirectives = () => {
  const origin = process.env.NODE_ENV === 'production'
    ? "'https://katarzyna-ziomek-zdanowicz.com'"
    : "'http://localhost:3000'";
  const self = "'self'";
  const unsafeInline = "'unsafe-inline'";
  const images = [
    'https:',
    'data:',
    origin,
  ];
  const fonts = [
    'data:',
    origin,
    self,
  ];

  return {
    defaultSrc: [ self ],
    connectSrc: [ self, origin ],
    fontSrc: [ ...fonts ],
    imgSrc: [ self, origin, ...images ],
    manifestSrc: [ self, origin ],
    // todo add nonce to inline script and remove unsafe inline
    scriptSrc: [ self, origin, unsafeInline ],
    styleSrc: [ self, origin, unsafeInline ],
  };
};

module.exports = getCspDirectives;
