var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);


// '/' === localhost:3002/availableTimes because we defined in app.js
router.get('/', function (req, res) {
  // res.send('We got some text here! 🤞🏼')
  knex
    .select('startTime', 'startDate')
    .from('anna')
    .where({availability: 'busy'})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The droids you are looking for could not be found. Please try again'
      }))
      //console.log("GET times submitted")

})




module.exports = router;
