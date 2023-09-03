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
  let month31=[1,3,5,7,8,10,12];
  let month30=[4,6,9,11];

  if(month31. includes(userInput[0])){
    console.log(31);}
  
//   else if(month30.includes(userInput[0])){
//     console.log(30);}
  
//   else if(userInput[0]==2){
//     console.log(28);}
  
  //end-here
});