const fs = require('fs');
const { minify } = require('html-minify');

const saveToFile = async ({ filePath, content }) => {
  const minified = minify(content, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyCSS: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    useShortDoctype: true,
  });

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, minified, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.saveToFile = saveToFile;
