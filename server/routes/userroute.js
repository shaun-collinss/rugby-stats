const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json(users)
      return null
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Db Error')
    })
})

module.exports = router
