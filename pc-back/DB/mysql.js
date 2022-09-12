const mysql = require('mysql2/promise');

const database = async() => {
  try {
    let conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: '3308',
      password: 'sad123',
      database: 'savebook'
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = database;