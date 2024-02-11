const express = require("express");
const router = express.Router();

router.use("/binary", require("./binary"));
router.use("/pdf", require("./pdf"));
router.use("/photo", require("./photo"));

module.exports = router;
