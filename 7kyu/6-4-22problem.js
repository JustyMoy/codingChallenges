// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
//PREP on problem
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1 //if length equals 0 return -1
    let l1 = a1.map(str => str.length) //figuring out length of string
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1)) //...spread array find max of string 1 - min string 2 and 
}

//detailed soln
/*
function mxdiflg(a1, a2) {
  a1 = a1.sort(function(a,b){return a.length-b.length});
  a2 = a2.sort(function(a,b){return a.length-b.length});
  return a1.length * a2.length ? Math.max(
    Math.abs(a1[0].length - a2[a2.length-1].length),
    Math.abs(a2[0].length - a1[a1.length-1].length)
  ) : -1;
}
*/

function mxdiflg(a1, a2) {
    var max = -1;
    for(var A1 of a1)
      for(var A2 of a2)
        max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
  }