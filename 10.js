/*
 
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 TIME SERVER
 Exercise 10 of 13

 Usage example:
 $ node 10.js 8000

 Check in Browser:
 127.0.0.1:8000 
 
*/

var net = require('net')
var dateformat = require('dateformat')

function handler (socket) 
{
	var date = new Date()
	socket.end(dateformat(date,"yyyy-mm-dd HH:MM")+"\n")
}

var server = net.createServer(handler)
server.listen(process.argv[2])