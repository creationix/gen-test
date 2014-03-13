var http = require('http');
var run = require('gen-run');

var server = http.createServer(function (req, res) {
  run(handler(req, res))
});

server.listen(process.env.PORT || 8080);

function* handler(req, res) {
  res.end("OK");
}
