/* eslint-disable quotes */
require('dotenv').config();

const getCspDirectives = () => {
  const self = "'self'";
  const unsafeInline = "'unsafe-inline'";
  const images = [
    'https:',
    'data:',
  ];
  const fonts = [
    'data:',
    self,
  ];

  return {
    defaultSrc: [ self ],
    connectSrc: [ self ],
    fontSrc: [ ...fonts ],
    imgSrc: [ self, ...images ],
    manifestSrc: [ self ],
    scriptSrc: [ self ],
    styleSrc: [ self, unsafeInline ],
  };
};

module.exports = getCspDirectives;
