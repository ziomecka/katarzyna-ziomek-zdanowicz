require('dotenv').config();
const mysql = require('mysql');

const {
  databaseMySQL,
  hostMySQL,
  userMySQL,
  passwordMySQL,
} = process.env.NODE.ENV === 'production'
  ? process.env
  : {
    databaseMySQL: 'katarzyn_frontend',
    hostMySQL: 'localhost',
    userMySQL: 'kasia',
    passwordMySQL: 'kasia',
  };

const createConnection = (options) => (
  mysql.createConnection({
    host: hostMySQL,
    user: userMySQL,
    password: passwordMySQL,
    database: databaseMySQL,
    port: '',
    charset : 'utf8',
    ...options,
  })
);

const connect = async (options = {}) => (new Promise((resolve, reject) => {
  const connection = createConnection(options);
  connection.connect((err) => {
    if (err) reject(err);
    resolve(connection);
  });
}));

module.exports = connect;
