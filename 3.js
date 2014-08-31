/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 MY FIRST I/O!
 Exercise 3 of 13

 Usage example:
 $ node 3.js file.txt 

*/

var fs = require('fs')
var buf=fs.readFileSync(process.argv[2])
var str=buf.toString()
var arr=str.split('\n')
var n=arr.length
console.log(n-1)