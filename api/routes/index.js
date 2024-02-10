const express = require("express");
const router = express.Router();

const routerV1 = require("./v1");

router.use("/v1", routerV1);

module.exports = router;
