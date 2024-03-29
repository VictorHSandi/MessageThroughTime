const express = require("express");
const router = express.Router();

// generate pdf
router.get("/", (req, res) => {
  res.send("This is the PDF API");
});

router.post("/generate", (req, res) => {
  const message = req.body.message;
  // Use the pdfgenerator in services directory
  const pdfGenerator = require("../../services/pdfgenerator");
  pdfGenerator.takeInput(message);
  setTimeout(() => {
    res
      .status(200)
      .sendFile("output.pdf", { root: __dirname + "/../../services" });
  }, 4000);
});

module.exports = router;
