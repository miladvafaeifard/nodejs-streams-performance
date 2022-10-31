var http = require("http");
var fs = require("fs");

// both run: ab -c 10 -n 100 http://localhost:8000/

// In general, Junior developers implement this:
// Around 275 requests per second
var normalServer = http.createServer(function (req, res) {
  fs.readFile(__dirname + "/data.csv", function (err, data) {
    res.write(data);
    res.end();
  });
});
normalServer.listen(8000);

// Faster than the proceeding code
// Around 380 requests per second
var streamServer = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + "/data.csv");
  stream.pipe(res);
  stream.on("end", () => res.end());
});
streamServer.listen(8000);
