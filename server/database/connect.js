require('dotenv').config();
const mysql = require('mysql');

const {
  databaseMySQL,
  hostMySQL,
  userMySQL,
  passwordMySQL,
  portMySQL,
} = process.env.NODE_ENV === 'production'
  ? process.env
  : {
    databaseMySQL: 'katarzyn_frontend',
    hostMySQL: 'localhost',
    userMySQL: 'kasia',
    passwordMySQL: 'kasia',
    portMySQL: '',
  };

const createConnection = (options) => (
  mysql.createConnection({
    host: hostMySQL,
    port: portMySQL,
    user: userMySQL,
    password: passwordMySQL,
    database: databaseMySQL,
    charset : 'utf8',
    ...options,
  })
);

const connect = async (options = {}) => (new Promise((resolve, reject) => {
  const connection = createConnection(options);
  connection.connect((err) => {
    if (err) {
      return reject(err);
    }
    resolve(connection);
  });
}));

module.exports = connect;
