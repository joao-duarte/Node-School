/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP COLLECT
 Exercise 8 of 13

 Usage example:
 $ node 8.js http://thefragmentationparadox.blogspot.pt

*/

var http = require('http')
var bl = require('bl')

function handler (response)
{
	response.setEncoding("utf-8")
	response.pipe(bl(function (err,data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
}

http.get(process.argv[2],handler)