const express = require("express");
const server = express();
const Games = require("./games/gamesModel");

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json("it's working!");
});

module.exports = server;
