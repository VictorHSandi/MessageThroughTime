const express = require("express");
const router = express.Router();
const multer = require("multer");

// Set up multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define the routes

router.get("/", (req, res) => {
  res.send("This is the photo API");
});

router.post("/upload", upload.any(), (req, res) => {
  // Once file is uploaded, call python script to process the image
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn("python", ["./scripts/ImageProcessor.py"]);
  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  res.status(200).send("File uploaded");
});

router.get("/preview", (req, res) => {
  res.sendFile("uploads/esp32-cam.jpg", { root: __dirname + "/../../" });
});

module.exports = router;
