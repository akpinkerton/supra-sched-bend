var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// localhost:3002/example

router.get('/', function (req, res) {
  res.send('example home page')
})

// localhost:3002/example/about

router.get('/about', function (req, res) {
  res.send('About example')
})

// localhost:3002/example
router.post('/', function (req, res) {
res.send('POST request to the homepage')
 console.log('posting data successful')
})

module.exports = router