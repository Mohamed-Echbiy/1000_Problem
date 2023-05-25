/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/
function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) return false;
    // str1 = str1.replace(str2[i], "", 1);
    str1 =
      str1.substring(0, str1.indexOf(str2[i])) +
      "" +
      str1.substring(str1.indexOf(str2[i]) + 1);
  }
  return true;
}
console.log(scramble("woooollsdfjejffsfrd", "worxld"));
// this my solution which is bad performance and does not get through
// why the heavy string manipulation cost a lot
// this is the other solution :
function scramblo(str1, str2) {
  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  console.log(charCount);

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
}
console.log(scramblo("woooollsdfjejffsfrd", "worxld"));
