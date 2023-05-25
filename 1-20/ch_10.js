/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  s1 = s2 + s1;
  s2 = [];
  s1 = s1.split("").forEach((s) => !s2.includes(s) && s2.push(s));
  return s2.sort().join("");
}

console.log(longest("aaaabbbssdefgh", "rrtyyajxqfefjefhfqhlefqkbc"));
