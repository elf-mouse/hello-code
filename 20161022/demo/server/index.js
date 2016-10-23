var HOST = '127.0.0.1';
var PORT = '3000';
var data = require('./data.json');
var express = require('express');
var app = express();

// CORS middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Authorization, Origin, X-Requested-With, Content-Type, Accept, ETag, Cache-Control, If-None-Match');
  // res.header('Access-Control-Expose-Headers', 'Etag, Authorization, Origin, X-Requested-With, Content-Type, Accept, If-None-Match, Access-Control-Allow-Origin');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/item', function(req, res) {
  res.json({
    code: 200,
    message: 'OK',
    data: data
  });
});

app.post('/api/item', function(req, res) {
  res.send({
    code: 200,
    message: 'OK',
    data: data
  });
});

app.listen(PORT, HOST, function() {
  console.log((new Date()) + ' Server is listening on ' + HOST + ':' + PORT);
});
