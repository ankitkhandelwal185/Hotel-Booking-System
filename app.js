const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
// create an express app
const app = express()
const port = 4200

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/hbs", { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.')
})

// including routes files
const routes = require('./routes/route.js')
app.use('/api', routes)

// catch 404 and forward to error handler
app.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// Read port and host from the configuration file
app.listen(port, error => {
  if (error) {
    console.error('Error in server running', error)
  } else {
    console.info('server is running on port ', port)
  }
})

module.exports = app
