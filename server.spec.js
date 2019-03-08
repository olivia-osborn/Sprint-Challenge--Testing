const request = require("supertest");
const server = require("./server");

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
});
