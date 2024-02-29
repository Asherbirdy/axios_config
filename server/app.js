const express = require('express')
const cors = require('cors')
const { StatusCodes } = require("http-status-codes");
const CustomError = require('./errors');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/a', (req, res) => {
  res.send({
    code: 1,
    message: '請求成功！'
  })
})

app.post('/b', (req, res) => {
  res.send({
    code: 1,
    message: '請求成功！' + req.body.message
  })
})

app.get('/c', (req, res) => {
  setTimeout(() => {
    res.send({
      code: 1,
      message: '請求成功！'
    })
  }, 3000)
})

app.post('/d', (req, res) => {
  throw new error
})

app.post('/e', (req, res) => {
  throw new CustomError.BadRequestError(`bad request`)
})

app.post('/f', (req, res) => {
  throw new CustomError.UnauthenticatedError(`UnauthenticatedError`)
})

const port = 3080

app.listen(port, () => {
  console.log(`server running on port:${port}`)
})