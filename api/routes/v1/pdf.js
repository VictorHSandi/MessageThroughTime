const express = require("express");
const router = express.Router();

// generate pdf 
router.get("/", (req, res) => {
  res.send("This is the PDF API");
});




module.exports = router;
