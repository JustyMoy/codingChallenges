// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

//str --> will always pass in a string, dont worry bout boolean or anything
//assume the input only contain english, no nums or special characters
//always be a string and won't be anything odd

//str -> no funny biz
//str -> words are reversed, opposite case

function stringTransformer(str) {
    //split str " " -> reverse -> join
    //split str "" -> map l === .toUpperCase() ? l.toLowerCase() : l.toUpperCase()

    let reversedStr = str.split(' ').reverse().join(' ') //makes it one long string with no space if i dont use space
    //console.log(reversedStr)
    let transformedStr = reversedStr.split('').map(l=> l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    //console.log(transformedStr)
    //add '' in split the second time or it wont work

    return transformedStr

  }

console.log(stringTransformer("example input"), "iNPUT eXAMPLE")
console.log(stringTransformer("Leon Noel"), "nOEL lEON")

// function stringTransformer1(str1){
//     //one liner
//     return str1.split(' ').reverse().join(' ').split('').map(l=> l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
// } 

// console.log(stringTransformer1("Example Input"), "iNPUT eXAMPLE")
// console.log(stringTransformer1("Leon Noel"), "nOEL lEON")
