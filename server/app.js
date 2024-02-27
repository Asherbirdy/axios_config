const express = require('express')
const cors = require('cors')

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

const port = 3080

app.listen(port, () => {
  console.log('server running')
})