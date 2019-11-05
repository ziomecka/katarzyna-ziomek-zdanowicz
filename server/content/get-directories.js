const fs = require('fs');
const restoreRequire = require('./override-require');

const getDirectories = async (source, callback) => {
  return new Promise((resolve) => {
    const dirContent = fs.readdirSync(source);
    const result = callback(dirContent);

    restoreRequire();
    resolve(result);
  });
};

module.exports = getDirectories;
