const fs = require('fs');
const path = require('path');
const getDirectories = require('./get-directories');
const { contentPath } = require('./_constants');

const isDirectory = source => fs.lstatSync(source).isDirectory();

const indexFile = '/index.ts';
const mapFile = '/mysql.ts';

const readContent = (dirContent = []) => {
  return dirContent
    .map(name => path.join(contentPath, name))
    .reduce((acc, filename) => {
      if (isDirectory(filename)) {
        acc[ filename.slice(filename.lastIndexOf('/') + 1) ] =
          [
            fs.existsSync(path.join(filename, indexFile)) &&
            require(path.join(filename, indexFile)).default || null,
            fs.existsSync(path.join(filename, mapFile)) &&
            require(path.join(filename, mapFile)).default || null,
          ];
      }
      return acc;
    }, {});
};

module.exports = async () => {
  return getDirectories(contentPath, readContent);
};
