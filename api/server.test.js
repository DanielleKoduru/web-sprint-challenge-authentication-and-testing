// Write your tests here
const supertest = require("supertest")
const server = require("./server")

test('sanity', () => {
  expect(true).toBe(false)
})

describe("[POST] /api/auth/register", () => {
  it("creates a new user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "captain america", password: "foofoo" })
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.id).toBeDefined()
    expect(res.body.name).toBe("captain america")
  })

  it("returns correct error message", async () => {
    const res = await supertest(server)
      .post("/register")
      .send({ username: "captain america", password: "" })
    expect(res.statusCode).toBe(409)
    expect(res.body.message).toMatch("username and password required")
  })
})

describe("[POST] /api/auth/login", () => {
  it("gets a single user by id", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send("/black panther/2")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.id).toBe(2)
    expect(res.body.name).toBe("black panther")
  })

  it("logs user in successfully", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send("/black panther/2")
    expect(res.body.message).toMatch("welcome, black panther")
    expect(res.statusCode).toBe(200)
  })
})