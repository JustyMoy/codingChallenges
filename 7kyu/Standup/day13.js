// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



function arrayDiff(a, b) {
//   if(b.length === 0){ return a }
//understand set pops up in interview a bit
    let newSet = new Set(b)
    return a.filter(n => !newSet.has(n) )

}

function arrayDiff1(a, b) {
    let newSet1 = new Set(b)
    //filter everything in a and compare what it doesn't have in b, return the different elements in b
    return a.filter(n => !newSet1.has(n))
}

function arrayDiff1(a, b) {
    let newSet1 = new Set(b)
    //filter everything in a and compare what it doesn't have in b, return the different elements in b
    return a.filter(n => !newSet1.has(n))
}