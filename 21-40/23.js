/*

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  ,
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

return ["name1", "name3"];

*/
function findHack(arr) {
  let hacked = [];
  for (let i = 0; i < arr.length; i++) {
    let studentName = arr[i][0];
    let totalScore = arr[i][1];
    let student = arr[i][2];
    let realScore = 0;
    let isValid = 0;
    for (let j = 0; j < student.length; j++) {
      if (student[j] === "A") {
        isValid++;
        realScore += 30;
      }
      if (student[j] === "B") {
        isValid++;
        realScore += 20;
      }
      if (student[j] === "C") realScore += 10;
      if (student[j] === "D") realScore += 5;
    }
    if (isValid > 4 && isValid === student.length) {
      realScore += 20;
    }
    if (realScore > 200) {
      realScore = 200;
    }
    if (realScore !== totalScore) {
      hacked.push(studentName);
    }
  }
  return hacked;
}

var array = [
  [
    "name1",
    150,
    ["B", "A", "A", "C", "A", "A"],
  ] /* 20 + 30 + 30 + 30 + 30 + 10 */,
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A", "A"]], // 20 + 30 + 30 + 30 + 30
  ["name4", 140, ["B", "A", "A", "C", "A"]],
];

console.log(findHack(array));
