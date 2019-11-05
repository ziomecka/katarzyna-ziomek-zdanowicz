const connect = require('./connect');

const query = async (dbOperation) => {
  let connection;
  try {
    connection = await connect();
  } catch (err) {
    return err;
  }

  return new Promise((resolve, reject) => {
    connection.query(dbOperation, (err, result) => {
      if (err) {
        reject (err);
      }
      connection.end((err) => {
        if (err) reject(err);
      });
      resolve(result);
    });
  });
};

module.exports = query;
