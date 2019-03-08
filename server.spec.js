const request = require("supertest");
const server = require("./server");
const db = require("./data/dbConfig");

afterEach(async () => {
  await db("games").truncate();
});

describe("server.js", () => {
  describe("get /", () => {
    it("should return 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("should return 'it's working!", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual("it's working!");
    });
  });

  describe("get /games", () => {
    it("should return 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });

    it("should retrieve list of games", async () => {
      const res = await request(server).get("/games");
      expect(res.body).toEqual([]);
    });
    it("should return JSON", async () => {
      const res = await request(server).get("/games");
      expect(res.type).toBe("application/json");
    });
  });

  describe("post /games", () => {
    it("should return 201", async () => {
      const game = { title: "monopoly", genre: "board", releaseYear: "1920" };
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(201);
    });

    it("should return 422 if title not added", async () => {
      const game = { genre: "arcade", releaseYear: "2001" };
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(422);
    });

    it("should return 422 if genre not added", async () => {
      const game = { title: "pokemon", releaseYear: "2001" };
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(422);
    });
  });
});
