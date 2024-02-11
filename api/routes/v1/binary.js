const express = require("express");
const router = express.Router();

// binary to characters
// take in binary characters from request body
// 
function binaryToChar(binary){
  const chunks = binary.match(/.{1,8}/g);
  const chars = chunks.map(chunk =>String.fromCharCode(parseInt(chunk, 2)));

  return chars.join("");
}

router.post("/binarytochar", (req, res) => {
  const binary = req.body.binary;
  const char = binaryToChar(binary);
  res.status(200).send(char);
});

router.get("/", (req, res) => {
  res.send("This is the binary API");
});

module.exports = router;
