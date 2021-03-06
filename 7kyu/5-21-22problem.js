// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//P: will there be words with special characters? capitol letters?
//R: return word.length middle letters
//E:if(s.length % 2 == 0){ return word }
//P: get the length of the word and return the middle letters, 2 if even, use a index of?

function getMiddle(s)
{
  //Code goes here!
  let middle = Math.floor(s.length/2);
  if (s.length % 2 == 0)
    return s[middle -1] + s[middle];
    else
    return s[middle]
      
}
//cleaner soln
function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1) //test => te - 1(one from the end) = e, st + 1(one at beginning) = s return 'es' 
        //-1 removes one from the end +1 removes one from beginning so test -> es
        : s.slice(middle, middle+1); //odd length so return one letter
        //word cut in half and 1 is removed at the beginning 
  
}
