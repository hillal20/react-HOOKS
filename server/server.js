const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

server.use(bodyParser.json());
server.use(cors());
server.get("/", (req, res) => {
  res.status(200).json({ msg: " api is running" });
});

server.get("/data", (req, res) => {
  const arr = [
    { text: "hollow word 1", completed: false },
    { text: "hollow word 2", completed: false },
    { text: "hollow word 3", completed: false },
    { text: "hollow word 4", completed: false }
  ];
  res.status(200).json({ msg: arr });
});

server.listen(4000, () => {
  console.log("=== server is running === ");
});
