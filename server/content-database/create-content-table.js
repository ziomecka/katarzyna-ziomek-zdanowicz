const {
  contentFields,
  contentPrefix,
} = require('./_constants');
const { createTable } = require('../database/');

const createContentTable = (
  async (tableName, tableFields = contentFields, prefix = contentPrefix) => {
    return await createTable(
      `${ prefix }_${ tableName }`,
      tableFields,
    );
  }
);

module.exports = createContentTable;
