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

  let A=parseInt(userInput[0]);
  let B=parseInt(userInput[1]);
  let C=parseInt(userInput[2]);
  //find the highest value among three
  if(A>B && A>C)
          {console.log(A);}

  else if(B>A && B>C)
          {console.log(B);}

  else if(C>B && C>A)
         { console.log(C);}

  else
   {console.log('all the three variables are same');}       
          

  //end-here
});