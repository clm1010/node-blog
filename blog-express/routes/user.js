const express = require('express')
const router = express.Router()

router.post('/login', function (req, res, next) {
  console.log(req.body)
  const {username, password} = req.body
  res.json({
    erron: 0,
    data: {
      username,
      password
    }
  })
})

module.exports = router
