/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 MAKE IT MODULAR
 Exercise 6 of 13

 Usage example:
 $ node 6.js ~/node_school txt

*/

var filter = require('./6_mod.js')

filter(process.argv[2],process.argv[3],function (err,data)
{
	if (err)
	{
		return console.error(err)
	}
	for (x in data){
		console.log(data[x])
	}
})
