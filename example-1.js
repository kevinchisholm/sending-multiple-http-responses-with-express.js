//require the express nodejs module
var express = require('express'),
  //set an instance of exress
  app = express();

//tell express what to do when the / route is requested
app.get('/', function (req, res) {
  //set the appropriate HTTP header
  res.setHeader('Content-Type', 'text/html');

  //send a response to the client
  res.send("<h1>This is the first response</h1>");
  //send a response to the client
  res.send("<h2>This is the second response</h2>");
  //send a response to the client
  res.send("<h2>This is the third response</h2>");
});

//wait for a connection
app.listen(5000, function () {
  console.log('POST test server is running on port 5000');
});