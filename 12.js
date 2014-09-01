/*
 
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP UPPERCASERER
 Exercise 12 of 13

 Usage example:
 $ node 12.js 8000

 Test it on another console:
 $ curl http://127.0.0.1:8000 -d "hello world" 

*/

var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  // request handling logic...
  req.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(process.argv[2])
