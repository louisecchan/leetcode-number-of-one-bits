// Write a function that takes the binary representation
//  of an unsigned integer
//  returns the number of '1' bits it has
//  (also known as the Hamming weight).

// Example 1:

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011
// has a total of three '1' bits.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (int) {
  let count = 0;
  while (int !== 0) {
    const bitComparison = int & 1; // 1 & 1 will return 1. 0 & 1 will return 0.
    if (bitComparison === 1) count++;
    int >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
  }
  return count;
};
