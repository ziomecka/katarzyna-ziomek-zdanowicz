require('dotenv').config();
const path = require('path');
const { ssr } = require('./ssr');
const { saveToFile } = require('./save-to-file');

const { NODE_ENV } = process.env;

const bundlePath = NODE_ENV === 'production'
  ? '../../bundleServerProd/'
  : '../../bundleServerDev/';

module.exports = new Promise(() => {
  require('../../bundleServerDev/server').default.then((prepareHtml) => {
    saveToFile({
      filePath: path.resolve(__dirname, bundlePath, 'index.html'),
      content: ssr({
        htmlPath: path.resolve(__dirname, bundlePath, 'template.html'),
        htmlString: prepareHtml(),
      }),
    });
  }
  );
});
