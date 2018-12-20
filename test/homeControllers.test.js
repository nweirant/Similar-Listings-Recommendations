var request = require("supertest")("http://localhost:3011");

test("should fetch array of similar listings", done => {
  request
    .get("/api/items/10")
    .expect(200)
    .expect(res => {
      console.log(res.body.length);
      expect(res.body.length).toBe(9);
    })
    .end(done);
});
