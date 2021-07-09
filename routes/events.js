var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);


const rawTime = Date.now();
const today=new Date(rawTime);
const todayHours = today.getHours()
const todayMinutes = today.getMinutes()
const todaySeconds = today.getSeconds()


// '/' === localhost:3002/events because we defined in app.js
router.get('/', function (req, res) {
  // res.send('We got text events here! 🤞🏼')
  knex
    .select('*')
    .from('anna')
    .orderBy('startDate', 'ACS')
    .orderBy('startTime', 'ASC')
    .orderBy('endTime', 'ASC')
    .orderBy('endDate', 'ACS')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The droids you are looking for could not be found. Please try again'
      })
    );

  console.log(`GET events submitted at ${todayHours}:${todayMinutes} `)
})

// '/' === localhost:3002/events because we defined in app.js
router.post('/', function (req, res) {
  knex('anna')
    .insert({
      eventTitle: req.body.event,
      startDate: req.body.startDate,
      startTime: req.body.startTime,
      endDate: req.body.endDate,
      endTime: req.body.endTime,
      type: req.body.type,
      location: req.body.location,
      availability: req.body.availability,
      attendees: req.body.attendees
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
  res.status(404).json({
    message:
      'The droids you are looking for could not be found. Please try again'
    })
  })
  if (req.body.event !== undefined) {
    console.log(`POST submitted at ${todayHours}:${todayMinutes}:${todaySeconds}. ${req.body.event} has been added.`)
  } else {
  console.log(`POST submitted at ${todayHours}:${todayMinutes}:${todaySeconds}.. BUT IT WASNT SUPPOSED TO...🤬`)
  }
})

// '/' === localhost:3002/events because we defined in app.js
router.delete('/', function (req, res) {
// res.send('We got some text here! 🤞🏼')
knex('anna')
.del()
.where({id : req.body.id})
.then(data => res.status(200).json(data))
   console.log(`DELETE submitted at ${todayHours}:${todayMinutes}. ${req.body.name}, with ID ${req.body.id} has been removed.`)
})


module.exports = router;
