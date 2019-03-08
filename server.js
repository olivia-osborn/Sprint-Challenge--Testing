const express = require("express");
const server = express();
const Games = require("./games/gamesModel");

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json("it's working!");
});

server.get("/games", async (req, res) => {
  try {
    games = await Games.get();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "couldn't fetch your data!" });
  }
});
module.exports = server;
