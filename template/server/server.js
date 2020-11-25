const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const path = require('path')

console.log('process.env.NODE_ENV is', process.env.NODE_ENV)
const app = express()

app.use(compression())
app.use(bodyParser.json({
  limit: '5mb'
}))
app.use(cookieParser())

routes.addRoutes(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
  })
}

app.listen(process.env.APP_PORT || 3001, () => {
  console.log('Express Server started on PORT: ', process.env.APP_PORT || 3001)
})

process.on('uncaughtException', (error) => {
  console.log('uncaughtException')
  console.log('error ', error)
})
