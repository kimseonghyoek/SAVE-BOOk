const mysql = require('mysql2');

const conn = mysql.createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'sad123',
  database: 'savebook'
});

const getConnect = (callback) => {
  conn.getConnection((err, conn) => {
    if(!err) {
      console.log('성공');
      callback(conn);
    } else if(err) {
      console.log('실패');
    }
  });
}

module.exports = getConnect;