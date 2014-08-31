/*
 
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP FILE SERVER
 Exercise 11 of 13

 Usage example:
 $ node 11.js 8000 file.txt 

 Check in Browser:
 127.0.0.1:8000 

*/

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  // request handling logic...
  var FS=fs.createReadStream(process.argv[3])
  FS.pipe(res)
})
server.listen(process.argv[2])