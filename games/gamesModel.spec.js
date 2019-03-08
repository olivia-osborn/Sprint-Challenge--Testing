const db = require("../data/dbConfig");
const Games = require("./gamesModel");

describe("games model", () => {
  describe("insert", () => {
    afterEach(async () => {
      await db("games").truncate();
    });

    it("should insert provided hobbits into the db", async () => {
      await Games.insert({ title: "pacman", genre: "arcade" });
      const games = await db("games");
      expect(games).toHaveLength(1);
    });

    it("should insert the provided game into the db", async () => {
      let game = await Games.insert({ title: "monopoly", genre: "board" });
      const games = await db("games");
      expect(game.title).toBe("monopoly");
    });
  });
});
