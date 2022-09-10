const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3308,
  password: "sad123",
  database: "savebook"
})

conn.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("데이터베이스 접속")
  }
})

module.exports = conn;