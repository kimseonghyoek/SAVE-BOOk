const passport = require('passport');
const local = require('../localStrategy');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("serialize User", user);
    done(null, user.ID);
  });
  
  passport.deserializeUser((id, done) => {
    console.log("deserializeUser id", id);
    let userInfo;
    const sql = 'SELECT * FROM user_table where email=?';
    con.query(sql, [id], (err, result) => {
      if (err) console.log(err);
      console.log("deserializeUser mysql result : " , result);
      const json  = JSON.stringify(result[0]);
      userInfo = JSON.parse(json);
      done(null, userInfo);
    })
  });
  local();
}