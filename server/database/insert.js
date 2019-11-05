const mysql = require('mysql');
const query = require('./query');

const insert = (
  async (tableName, id, columns = [], values = []) => {
    const escaped =
    `"${ id }","${ values
      .map(value => mysql.escape(value))
      .join('", "')
    }"`;
    const ins = (
      `insert into ${
        tableName
      }(id, ${
        columns.join(', ')
      }) values (${
        escaped
      })`
    );

    try {
      await query(ins);
    } catch (err) {
      return err;
    }
  }
);

module.exports = insert;
