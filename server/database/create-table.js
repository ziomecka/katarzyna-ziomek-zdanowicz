const query = require('./query');

const createTable = (
  async (tableName, fields) => {
    const create = (
      `create table if not exists ${ tableName }(
        ${ fields.join (', ') }
      )`
    );

    return await query(create);
  }
);

module.exports = createTable;
