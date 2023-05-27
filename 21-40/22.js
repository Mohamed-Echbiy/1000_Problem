/*

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874


*/
function maxProduct(a) {
  // ...

  let highValue = Math.max(...a);
  a[a.indexOf(highValue)] = 0;
  let secondValue = Math.max(...a);
  return highValue * secondValue;
}
console.log(maxProduct([1, 6, 3]));
console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])); // 494 * 443 =218842
