var express = require('express');
var app = express();
let morgan       = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');


app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 

var cors = function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,Mcpi-Href-Expand');
  next();
}

app.use(cors);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/dist'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// start server on the specified port and binding host
app.get('/', function(req, res){
  res.json({"test":"yes"})
});

var port = 2000
app.listen(port, function() {
  // print a message when the server starts listening
  console.log("server starting on " + port);
});

