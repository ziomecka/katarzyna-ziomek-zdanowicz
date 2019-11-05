const query = require('./query');

const createTable = (
  async (tableName, fields) => {
    const create = (
      `create table if not exists ${ tableName }(
        ${ fields.join (', ') }
      )`
    );

    try {
      return query(create);
    } catch (err) {
      return err;
    }
  }
);

module.exports = createTable;
