const { getConnectionPool } = require("../mysql")

exports.userCheck = (req, res) => {
  getConnectionPool((conn, params) => {
    const sql = "SELECT email FROM user_table"
    conn.query(sql, [params], (err, rows) => {
      if(rows.length) {
        res.json({ result : "이미 가입함."})
      } else if(err) {
        console.log(err);
        res.json({ result : "에러"})
      }
    })
  })
}