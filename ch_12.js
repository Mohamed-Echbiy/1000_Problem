/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 
*/

function litres(time) {
  return Math.floor(time * 0.5);
}

// other solutions  from other people
litres = (t) => ~~(t / 2); // wtf is this hhhhhhhhh ~~ is doing what floor doing it truncaes the decimal value

// so after searching:

/*

In the code snippet you provided, the ~~ symbol is known as the "double tilde" operator. In JavaScript, the double tilde is a shorthand way to convert a value to an integer by performing a bitwise operation. It effectively truncates the decimal part of the number and keeps only the integer portion.

In the specific context you shared, the expression ~~(t / 2) is using the double tilde operator to convert the result of (t / 2) to an integer value. This is often used as a faster alternative to the Math.floor() or parseInt() methods for positive numbers.

*/

//---------------------
console.log(litres(3));
console.log(litres(11.8));
console.log(litres(6.7));
console.log(litres(8));
//---------------------
