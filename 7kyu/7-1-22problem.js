// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    let divs = [];
    
    for(var i = 2; i < integer; i++) {
      if(integer % i === 0) {
        divs.push(i);
      }
    }
    
    return divs.length ? divs : integer + ' is prime';
};

//work on july codewar solns
//go through problems and comment out the lines