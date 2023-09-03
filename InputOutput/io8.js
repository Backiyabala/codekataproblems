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
 let array=userInput[0].split(' ');
   console.log(array[0]);
   console.log(array[1]);
   console.log(array[2]);
  //end-here
});