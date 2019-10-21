const fs = require('fs');

const saveToFile = async ({ filePath, content }) => {
  return new Promise((resolve, reject) => {
    console.log(content, filePath)
    fs.writeFile(filePath, content, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.saveToFile = saveToFile;
