/* eslint-disable quotes */
const getCspDirectives = () => {
  const origin = process.NODE_ENV === 'production'
    ? 'https://katarzyna-ziomek-zdanowicz.com*'
    : 'http://localhost:3000/*';
  const none = "'none'";
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
    connectSrc: [ self, origin ],
    defaultSrc: [ none ],
    fontSrc: [ ...fonts ],
    imgSrc: [ self, origin, ...images ],
    // todo add nonce to inline script and remove unsafe inline
    scriptSrc: [ self, origin, unsafeInline ],
    styleSrc: [ self, origin, unsafeInline ],
  };
};

module.exports = getCspDirectives;
