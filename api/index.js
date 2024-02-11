const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server: server });

app.use(bodyParser.json());

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

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
