var http = require('http');
var run = require('gen-run');

var server = http.createServer(function (req, res) {
  run(handler(req, res))
});

server.listen(process.env.PORT || 8080);

function* handler(req, res) {
  res.write("Starting response and sleeping.");
  for (var i = 0; i < 10; i++) {
    res.write(".");
    yield* sleep(300);
  }
  res.end("\nDone!");
}

function* sleep(ms) {
  yield function (callback) {
    setTimeout(callback, ms);
  };
}
