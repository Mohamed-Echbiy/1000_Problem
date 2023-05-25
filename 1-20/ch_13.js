/*

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

*/

function whatCentury(year) {
  const yearCentury =
    +year.slice(2.4) === 00 ? +year.slice(0, 2) : +year.slice(0, 2) + 1;
  return `${
    +year.slice(2.4) === 00 ? +year.slice(0, 2) : +year.slice(0, 2) + 1
  }${
    +yearCentury.toString()[0] > 1 && +yearCentury.toString()[1] === 1
      ? "st"
      : +yearCentury.toString()[0] > 1 && +yearCentury.toString()[1] === 2
      ? "nd"
      : +yearCentury.toString()[0] > 1 && +yearCentury.toString()[1] === 3
      ? "rd"
      : "th"
  }`;
}

// I will properly get demolished by some dude solution again :)
// fuuuuuuuuuuuuuuuuuuuuuuck
// he we go again

function whatCentury(year) {
  var century = Math.ceil(year / 100); // if I hear some fucking dude in a youtube video telling people math does not matter in programming I will report them for misleading information
  console.log(century % 10);
  return (
    century +
    (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th") // what in earth is this
    /*
    so if I do get it after dividing the year to 100 2000 / 100 = 20
    next step => check if century > 20 if true "th" & if not we initialize an array and get index of the modules of century  by 10 which will give numbers if the index is undefined we put "th"
    */
  );
} // I am just going to say it fuck you Ivan Diachenko
console.log(whatCentury("1999"));
console.log(whatCentury("2000"));
console.log(whatCentury("2016"));
console.log(whatCentury("1200"));
console.log(whatCentury("2201"));
console.log(whatCentury("1600"));
