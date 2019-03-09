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

server.post("/games", async (req, res) => {
  let game = req.body;
  try {
    if (!game.title || !game.genre) {
      res.status(422).json({ error: "remember to enter a title and genre!" });
    } else {
      game = await Games.insert(game);
      res.status(201).json({ game });
    }
  } catch (error) {
    res.status(500).json({ error: "couldn't add game!" });
  }
});

module.exports = server;
