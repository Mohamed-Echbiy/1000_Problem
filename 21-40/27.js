/*

Task

If possible, divide the integers 1,2,…,n into two sets of equal sum.
Input

A positive integer n <= 1,000,000.
Output

If it's not possible, return [ ] (Javascript and Python) or ( ) (Python) or [[],[] ] (Java) or None (Scala). If it's possible, return two disjoint sets. Each integer from 1 to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.
Examples:

For n = 8, valid answers include:

[1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7] ])

[8, 1, 3, 2, 4], [5, 7, 6]

[7, 8, 3], [6, 1, 5, 4, 2], and others.

For n = 9 it is not possible. For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either. 


*/

function createTwoSetsOfEqualSum(n) {
  const isOdd = n % 2 !== 0 ? n : n + 1;
  let sumOfAll = [];
  for (let i = 1; i <= n; i++) {
    sumOfAll.push(i);
  }
  const arrayNum = sumOfAll;
  sumOfAll = sumOfAll.reduce((c, n) => c + n);
  if (sumOfAll % 2 === 0) {
    let array = [];
    if (n % 2 !== 0) {
      array.push([n]);
    }
    for (let i = 1; i <= n; i++) {
      if (i > Math.floor(n / 2)) {
        break;
      }
      for (let j = 0; j < arrayNum.length; j++) {
        if (arrayNum[j] === i) {
          continue;
        }
        //

        if (arrayNum[j] + i === isOdd) {
          array.push([arrayNum[j], i]);
        }
      }
    }

    let firstSequence = array.slice(0, Math.ceil(n / 2) / 2);
    let secondSequence = array.slice(Math.ceil(n / 2) / 2);
    return [firstSequence.flat(), secondSequence.flat()];
  }
  return [];
}
console.log(createTwoSetsOfEqualSum(8));
console.log(createTwoSetsOfEqualSum(5));
console.log(createTwoSetsOfEqualSum(7));
console.log(createTwoSetsOfEqualSum(11));
console.log(createTwoSetsOfEqualSum(9));
console.log(createTwoSetsOfEqualSum(13));
console.log(createTwoSetsOfEqualSum(3));
