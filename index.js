var http = require("http");
var fs = require("fs");

var normalServer = http.createServer(function (req, res) {
  fs.readFile(__dirname + "/data.csv", function (err, data) {
    res.write(data);
    res.end();
  });
});
normalServer.listen(8000, () => {
  console.log("regular server is listening ... 8000");
});

var streamServer = http.createServer(function (req, res) {
  var stream = fs.createReadStream(__dirname + "/data.csv");
  stream.pipe(res);
  stream.on("end", () => res.end());
});
streamServer.listen(8000, () => {
  console.log("stream server is listening ... 8000");
});
