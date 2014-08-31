/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 FILTERED LS
 Exercise 5 of 13

 Usage example:
 $ node 5.js ~/node_school txt

*/

var fs = require('fs')
var path = require('path')

function handler(err,list)
{
	for (var i in list) 
	{
		if (path.extname(list[i]) == ('.' + process.argv[3]))
		{
			console.log(list[i])
		}
	}
}

fs.readdir(process.argv[2],handler)