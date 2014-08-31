/*

 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 BABY STEPS
 Exercise 2 of 13

 Usage example:
 $ node 2.js 2 3 4

*/

var sum=0

for (i = 2; i < process.argv.length; i++) 
{
    sum += Number(process.argv[i])
}

console.log(sum)