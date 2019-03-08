const db = require("../data/dbConfig");

function get() {
  return db("games");
}

async function insert(newGame) {
  const [id] = await db("games").insert(newGame, "id");
  return db("games")
    .where({ id })
    .first();
}

module.exports = {
  get,
  insert
};
