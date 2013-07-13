var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var inputfile = "index.html"
  var buf = new Buffer(256000);
  buf = fs.readFileSync(inputfile);
  var inputString = buf.toString();
  response.send(inputString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
