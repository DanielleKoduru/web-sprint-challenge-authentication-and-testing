// Write your tests here
const supertest = require("supertest")
const server = require("./server")

test('sanity', () => {
  expect(true).toBe(false)
})

// describe("[POST] /api/auth/register", () => {
//   it("creates a user", async () => {
//     const res = await supertest(server)
//       .post("/users")
//       .send({ name: "captain america" })
//     expect(res.statusCode).toBe(201)
//     expect(res.type).toBe("application/json")
//     expect(res.body.id).toBeDefined()
//     expect(res.body.name).toBe("captain america")
//   })

//   it("", () => {

//   })
// })

// describe("[POST] /api/auth/login", () => {
//   it("gets a single user by id", async () => {
//     const res = await supertest(server)
//       .get("/black panther/2")
//     expect(res.statusCode).toBe(200)
//     expect(res.type).toBe("application/json")
//     expect(res.body.id).toBe(2)
//     expect(res.body.name).toBe("black panther")
//   })

//   it("logs user in successfully", () => {
    
//   })
// })