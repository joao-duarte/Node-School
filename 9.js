/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 JUGGLING ASYNC
 Exercise 9 of 13

 Usage example:
 $ node 9.js http://thefragmentationparadox.blogspot.pt http://www.sapo.pt http://www.ualg.pt 

*/

var http = require('http')
var bl = require('bl')
var cenas=[]

function handler (response,index)
{
	response.setEncoding("utf-8")
	response.pipe(bl(function (err,data){
		console.log(data.toString())
	}))
	response.on("end", function () {
		if (3+index<process.argv.length)
		{
			http.get(process.argv[3+index],function (r) { 
			handler(r,index+1)
		    })
		}
    })
}

http.get(process.argv[2],function (r) { 
	handler(r,0)
})