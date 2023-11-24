require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')             
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpsServer)
const cors = require('cors')
global.__basedir = __dirname

app.use(morgan('combined'))
app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('dist'))
app.use(cors())
require('./routes')(app, io)
httpServer.listen(80)

