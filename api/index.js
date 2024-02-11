const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server: server });

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://messagethroughtime.tech",
    credentials: true,
  })
);

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    broadcast(message);
  });

  function broadcast(msg) {
    for (const client of wss.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    }
  }
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/", require("./routes"));

server.listen(port, () => {
  console.log("Server listening on port 3000");
});
