const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const getConnect = require('../DB/mysql');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pw',
  }, 
  (email, pw, done) => {
    const hash = bcrypt.hashSync(pw, 8);
    const sql = "SELECT * FROM user_table WHERE email=?";
    getConnect((conn) => {
      conn.query(sql, email, (err, rows) => {
        if (err) {
          console.log("MYSQL 에러");
        }
        if(rows.length === 0) {
          console.log("아이디가 없음");
          return done(null, false, {message : "Incorrect"});
        } else {
          const sql = "SELECT pw FROM user_table WHERE email=?";
          getConnect((conn) => {
            conn.query(sql, email, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                const compare = bcrypt.compareSync(pw, hash);
                if (compare) {
                  console.log("pw : ", result[0].pw);
                  const json = JSON.stringify(result[0]);
                  const userInfo = JSON.parse(json);
                  console.log("userinfo : " + userInfo);
                  return done(null, userInfo);
                } else {
                  console.log("비밀번호가 다르다.");
                }
              }
            })
          })
        }
      })
    })
  }))
}