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
  //send a second response to the client
  res.send("<h2>This is the second response</h2>");
  //send a third response to the client
  res.send("<h3>This is the third response</h3>");
});

//wait for a connection
app.listen(5000, function () {
  console.log('The web server is running. Please open http://localhost:5000/ in your browser.');
});