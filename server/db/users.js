const connection = require('./connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').select().where({id}).first
}

module.exports = {
  getUser,
  getUsers
}
