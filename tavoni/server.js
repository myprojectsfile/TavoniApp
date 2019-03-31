const express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  serverConfig = require('./server.config'),
  appServerPort =
    process.env.TAVONI_APP_SERVER_PORT || serverConfig.TAVONI_APP_SERVER_PORT,
  path = require('path'),
  cors = require('cors')

const app = express()

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
  })
)

app.use(history())

app.use('/', serveStatic(path.join(__dirname, '/dist/spa-mat')))
app.listen(appServerPort, () => {
  console.info(
    `Tavoni Server Application Listening: http:\\localhost:${appServerPort}`
  )
})
