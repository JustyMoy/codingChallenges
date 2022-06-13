//codewar problem 
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
//P:Will there be duplicates of the word?
//R:return shortest string of word word.length
//E: shoes are cool -> 3
//P: sort words.length and return [0]?
// let s = ['shoes','apple','hi']

// function findShort(s){
//     let first = s.split().sort().join()
//     let sorted = s.sort((a,b)=> a.length - b.length)
//     return sorted[0]
// }
function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length //return with .length that's why my prob kept returning 0
}

//another problem
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}