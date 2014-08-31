/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP CLIENT
 Exercise 7 of 13

 Usage example:
 $ node 7.js http://thefragmentationparadox.blogspot.pt

*/

var http = require('http')

function handler (response)
{
	response.setEncoding("utf-8")
	response.on("data", function hand2 (data){
		console.log(data)
	})
}

http.get(process.argv[2],handler)