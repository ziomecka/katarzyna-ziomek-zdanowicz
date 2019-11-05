const createContentTable = require('./create-content-table');
const insertContent = require('./insert-content');

const createContentDatabase = async () => {
  await createContentTable('pl');
  await createContentTable('en');
  await insertContent();
};

module.exports = createContentDatabase;
