require('dotenv').config();
const path = require('path');
const { ssr } = require('./ssr');
const { saveToFile } = require('./save-to-file');

const { NODE_ENV } = process.env;

const bundlePath = NODE_ENV === 'production'
  ? '../../bundleServerProd'
  : '../../bundleServerDev';

console.log(path.resolve(__dirname, bundlePath), 'bundlePath')
module.exports = new Promise(() => {
    console.log('tries to save to bundelPath', path.resolve(__dirname, bundlePath, 'template.html'));
  require(path.join(bundlePath, '/server.js')).default.then((prepareHtml) => {
    console.log(typeof prepareHtml)
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
