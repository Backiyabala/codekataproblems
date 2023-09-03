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
let N=userInput[0];
let result=[];
//print first three multiples

for(let i=1;i<=3;i++)
   { 
   
   result.push(i*N);
   }
   console.log(result.join(' '));
 

  //end-here
});