const connect = require('./connect');

const query = async (dbOperation) => {
  const connection = await connect();

  return new Promise((resolve, reject) => {
    connection.query(dbOperation, (err, result) => {
      if (err) {
        return reject (err);
      }
      connection.end((err) => {
        if (err) {
          return reject(err);
        }
      });
      resolve(result);
    });
  });
};

module.exports = query;
