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

 let a=userInput[0];
 //area of the equilateral triangle 
 let area=Math.sqrt(3)*(a**2)*(1/4);
 console.log(area.toFixed(2));
  //end-here
});