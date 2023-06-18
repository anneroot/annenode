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


//pegar os dados do login


const usuario = {
  login: 'teste',
  senha: 123
}

router.post('/login', (req, res) => {
  const login = req.body.login
  const senha = req.body.senha
  let message = ""
  if (login == usuario.login && senha == usuario.senha) {
    auth = true
    message = "Usuário logado com sucesso!"

    res.render('home', { usuario: usuario, auth, message })
  }
  else {
    auth = false
    message = "Usuário e/ou senha inválidos!"
    res.render('login', { auth, message })

  }
})


router.get('/logout', (req, res) => {
  auth = false
  res.render('login', { auth })

})