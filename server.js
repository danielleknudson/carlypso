var express     = require('express');
var app         = express();
var partials    = require('express-partials'); // allows multiple templates to be rendered
var bodyParser  = require('body-parser'); // parses HTTP request body 
var request     = require('request');
var Promise     = require('bluebird');

app.set('views', __dirname + '/public');

app.use(partials());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/count', function (req, res) {

  request.get('http://interview.carlypso.com/count', function (error, response, body) {
    if (error) { 
      throw new Error(error);
    }
    res.send(body);
  });
});

app.get('/listings', function (req, res) {
  var offset = req.query.offset;
  var limit = req.query.limit;

  if (!offset || !limit) {
    res.status(422).send('Must provide offset and limit paramaters.')
  }

  request.get('http://interview.carlypso.com/listings?offset=' + offset + '&limit=' + limit, function (error, response, body) {
    if (error) { 
      throw new Error(error);
    }
    res.status(200).send(body);
  });
});

app.listen(8080);

module.exports = app;