const thingsController = require('./controllers/thingsController')

function addRoutes (app) {
  app.all('*', (req, res, next) => {
    console.log(req.method + ' ' + req.url)
    next()
  })

  app.get('/api/things', thingsController.list)
  app.get('/api/things/:id', thingsController.get)
}

const routes = {
  addRoutes
}

module.exports = routes
