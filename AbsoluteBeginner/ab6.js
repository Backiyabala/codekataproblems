// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

 let r=userInput[0];
 if (r<0)
{console.log('error');}

//find circumference of the circle
let C=2*(22/7)*r;
console.log(C.toFixed(2));
  //end-here
});