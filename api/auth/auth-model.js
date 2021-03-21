const db = require('../../data/dbConfig.js');

function find() {
    return db("users")
        .select("*")
}

async function add(newUser) {
    const [id] = await db('users')
        .insert(newUser)
    return add(id)
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
        .where(username)
        .first()
}

module.exports = {
    find,
    add,
    findBy,
    findById,
};