const fs = require('fs');

const saveToFile = async ({ filePath, content }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.saveToFile = saveToFile;
