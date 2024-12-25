const request = require("supertest"); // Perbaiki tanda kutip
const app = require("./app");        // Perbaiki tanda kutip

describe("GET /*", () => {           // Tambahkan tanda kutip untuk string
  it("responds with 'Hello, World!'", async () => { // Tambahkan tanda kutip
    const res = await request(app).get('/'); // Perbaiki tanda kutip
    expect(res.statusCode).toBe(200);        // Hilangkan spasi berlebih
    expect(res.text).toBe("Hello, World!");  // Perbaiki tanda kutip
  });
});
