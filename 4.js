/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 MY FIRST ASYNC I/O!
 Exercise 4 of 13

 Usage example:
 $ node 4.js file.txt 

*/

var fs = require('fs')

function handler (err,buf)
{
	var str=buf.toString() 
	var arr=str.split('\n')
	var n=arr.length
	console.log(n-1)
}

fs.readFile(process.argv[2],handler) //{encoding:"utf-8"} can be used as second argument of readfile