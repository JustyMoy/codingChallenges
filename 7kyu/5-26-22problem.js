// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
//P:any negative numbers? all whole numbers?
//R:return the sum of the row
//E:row 1 = 1, 2 sum = 3
//P: sum up all numbers in the row
function rowSumOddNumbers(n)
{
  /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
  return n * n * n;
}
//another soln
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
//For anyone that wants an explanation in layman's terms: n * n will give you the average number of the final row. Also, n equals the amount of numbers in that row. This means that n * n * n is basically saying (average number of final row) * (amount of numbers in final row)... And I thought I had a good solution >.<