// SETTING UP DEV, TEST, PROD: https://mherman.org/blog/test-driven-development-with-node/

var express = require('express');
const cors = require("cors");

var path = require('path');
//var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var events = require('./routes/events');
var users = require('./routes/users');
var availTimes = require('./routes/availTimes');
var example = require('./routes/example')


var app = express();

app.use(cors());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/events', events);
// app.use('/users', users);
app.use('/availableTimes', availTimes);
app.use('/example', example)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'dev error': {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'prod error': {
      message: err.message,
      error: {}
    }
  });
});


module.exports = app;
