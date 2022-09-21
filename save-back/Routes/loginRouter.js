const express = require("express");
const { userCheck } = require("../controllers/user");
const getConnect = require("../DB/mysql");
const router = express.Router();
const db = require("../DB/mysql");

router.post("/post", userCheck);

module.exports = router;
