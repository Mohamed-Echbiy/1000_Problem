/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/
function likes(names) {
  // TODO
  if (names.length < 1) return "no one likes this";
  if (names.length < 4) {
    let text = names.map((e, i) => {
      if (names.length > 2 && i === names.length - 2) return `, ${e} and `;
      if (names.length === 2 && i === 1) return ` and ${e}`;
      return `${e}`;
    });
    return `${text.join("")} like${names.length === 1 ? "s" : ""} this`;
  }
  let text = names.map((name, i) => {
    if (i === 0) return `${name}, `;

    if (i === 1) return name;
    return "";
  });
  return `${text.join("")} and ${names.length - 2} others like this`;
}

console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Max", "Mark"]));
console.log(likes(["Max", "John", "Mark", "Laila", "Medoo"]));
console.log(likes(["Max"]));
console.log(likes([]));
