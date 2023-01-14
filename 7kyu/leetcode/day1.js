// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//will there be empty strings, spaces, special characters, nums
//return the num of repeated letter the most
//// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
//use a hash map compare the letters to the letters that repeat the most, loop through

function findJewels(jewels, stones) {
    const map = {}
    let count = 0

    for(const jewel of jewels){
        map[jewel] = true
    }

    for(const stone of stones){
        if( map[stone] ){
            count++
        }
    }
    return count
};

//leetcode practice
//hash maps

function findJewels(jewels, stones) {
    const map = {}
    let count = 0
    //compare new item to what exists
    for(const jewel of jewels){
        map[jewel] = true
    }
    //checks exisiting item in array with new item on outside
    for(const stone of stones){
        if( map[stone] ){
            count++
        }
    }
    return count
}

//more practice here

function findJewel(j, s) {
    const map = {}
    let count = 0

    for(const je of j){
        map[je] = true
    }

    for(const st of s){
        if( map[stone] ){
            count++
        }
    }
    return count
}