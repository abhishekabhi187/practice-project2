const vote = () =>{
    if(age>18) console.log(`Eligible to vote`);
    if(age<18) console.log(`Not eligible to vote`);
    else if(age==18)
    console.log(`Make your VoterID`)
  }
  
  vote(17);


  const fizzBuzz = (x) =>{
    // for(let i=1;i<x;i++){
     if(x % 3 ==0) console.log(`Fizz`);
     else if(x % 5 ==0) console.log(`Buzz`);
     else 
     console.log(`FizzBuzz`);
     //}
  }
  
  fizzBuzz(1);
  