/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


*/

function solution(str, ending) {
  return str.slice(-ending.length) === ending || ending.length < 1
    ? true
    : false;
}

console.log(solution("abc", "bc")); // true
console.log(solution("abcd", "bec")); // false
console.log(solution("abce", "bc")); // false
console.log(solution("abcfg", "bcfg")); // true
console.log(solution("abcfg", "")); // true

/*
 so after submitting and see other pepole soultion its fucking disvstating
 apperntlly there is a method endsWith() 
*/
