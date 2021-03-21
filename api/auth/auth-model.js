const db = require('../../data/dbConfig.js');

function find() {
  return db("users")
    .select("*")
}

async function add(newUser) {
    const [id] = id.req.newUser
    return add(newUser)
}

function findById(id) {
    return db('users')
    .where('id', id)
    .first(
        'id',
        'username',
        'password'
    )
}

function findBy(username) {
    return db('users')
    .select("*")
    .where(username)
}

module.exports = {
    find,
    add,
    findBy,
    findById,
  };