const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken.js");

const { index } = require("../controller/holdingsController.js");

router.get("/index", verifyToken, index);

module.exports = router;