// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

//Parameters: what's going into function? arrays are coming in containing ones and zeroes, could be varying in length

//Result: an integer equivalent of the binary value represented in the array

//Examples: 
// it("Example tests", () => {
//     Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//     Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//     Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//     Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
// });

//P code: take the array and join the elements together into a string and then convert string and retrun the integer equivalent

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
  };