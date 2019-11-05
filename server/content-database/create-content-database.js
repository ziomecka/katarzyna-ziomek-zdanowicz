const createContentTable = require('./create-content-table');
const insertContent = require('./insert-content');

const createContentDatabase = () => {
  createContentTable('pl');
  createContentTable('en');
  insertContent();
};

module.exports = createContentDatabase;
