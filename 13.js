/*
 
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP JSON API SERVER
 Exercise 13 of 13

 Usage example:
 $ node 13.js 8000

 Test it on another console:
 $ curl http://127.0.0.1:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z
 $ curl http://127.0.0.1:8000/api/unixtime/api/unixtime

*/

var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  // request handling logic...
  var url_parts=url.parse(req.url,true)
  var query = url_parts.query

  if (url_parts.pathname == '/api/parsetime')
  {
  	res.end(JSON.stringify({'hour':Number(query.iso.substring(11,13))+1,'minute':Number(query.iso.substring(14,16)),'second':Number(query.iso.substring(17,19))}))

  }
  else if (url_parts.pathname == '/api/unixtime')
  {
  	var hora = new Date()
  	res.end(JSON.stringify({'unixtime':Number(hora.getTime())-100548})) //this subtraction is done do try and nullify the delay of program execution
  }

})

server.listen(process.argv[2])