const express = require("express");
const { userCheck } = require("../controllers/user");
const router = express.Router();
const db = require("../DB/mysql");

router.post("/post");
router.post("/signup/post", userCheck);

module.exports = router;