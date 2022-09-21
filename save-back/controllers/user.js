const getConnect  = require("../DB/mysql")

exports.userCheck = async (req, res) => {
  const email = req.body.email;
  const name = req.body.nickname;
  const pw = req.body.pw;
  const phonenum = req.body.phonenumber;
  const sqlInsert = {
    email: email,
    nickname: name,
    pw: pw,
    phonenum: phonenum,
  };
  getConnect(() => {
    const sql = "SELECT email FROM user_table where email=?"
    getConnect((conn) => {
      conn.query(sql, email, (err, rows) => {
        if (err) {
          console.log(err);
        }
        if(rows.length) {
          console.log("회원이 있음");
          console.log(rows);
        } else if (rows.length === 0) {
          console.log("회원없음");
          const sql = "INSERT INTO user_table SET ?";
          conn.query(sql, sqlInsert, (err, rows) => {
            if(err) {
              console.log(err);
            } else {
              console.log('가입완료');
              console.log(rows);
              res.send(rows)
            }
            conn.release();
          })
        }
      });
      conn.release();
    });
  })
}