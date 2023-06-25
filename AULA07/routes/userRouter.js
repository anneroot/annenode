const express = require('express')
const router = express.Router()

var auth = false
router.get('/add', (req, res) => {
  auth = true
  res.render('userform', { auth })
})


router.post('/save', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const user = { name: name, age: age }
  auth = true
  res.render('viewuser', { user: user, auth })

})