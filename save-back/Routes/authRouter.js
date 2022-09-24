const express = require("express");
const { userCheck, login } = require("../controllers/user");
const router = express.Router();
const passport = require('passport');
const getConnect  = require("../DB/mysql");

router.post(
  "/post",
  (req, res, next) => {
    passport.authenticate("local", {
      session: false,
    })(req, res, next);
  },
  (req, res) => {
    if (req.user) {
      const user = { email: req.user.email, nickname: req.user.nickname };
      res.send(user);
    }
    console.log("user.js :" + res);
    res.end();
  }
);
router.post("/signup/post", userCheck);

module.exports = router;
