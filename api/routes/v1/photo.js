const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");

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
  // Make request to flask app on different server
  const data = new FormData();
  // Get the file from uploads folder
  data.append("file", fs.createReadStream("uploads/esp32-cam.jpg"));
  axios
    .post("https://flask.messagethroughtime.tech/process", data, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  res.status(200).send("File uploaded");
});

router.get("/preview", (req, res) => {
  res.sendFile("uploads/esp32-cam.jpg", { root: __dirname + "/../../" });
});

module.exports = router;
