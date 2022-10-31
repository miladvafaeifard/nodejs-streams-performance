// var http = require("node:http");
// var fs = require("node:fs/promises");

// var normalServer = http.createServer(async (req, res) => {
//   const data = await fs.readFile(__dirname + "/data.csv");
//   res.write(data);
//   res.end();
// });
// normalServer.listen(8000, () => {
//   console.log("regular server is listening ... 8000");
// });

var http = require("node:http");
var fs = require("node:fs");

var streamServer = http.createServer(async (req, res) => {
  var stream = fs.createReadStream(__dirname + "/data.csv");
  stream.pipe(res);
  stream.on("end", () => res.end());
});
streamServer.listen(8000, () => {
  console.log("stream server is listening ... 8000");
});
