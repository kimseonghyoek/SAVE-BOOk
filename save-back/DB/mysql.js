const mysql = require('mysql2/promise');

const conn = mysql.createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'sad123',
  database: 'savebook'
});

exports.getConnectionPool = (callback) => {
  conn.getConnection((err, conn) => {
    if(err) {
      console.log(err);
    } if(!err) {
      console.log('Pass');
      callback(conn);
    }
  })
}