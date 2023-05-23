/*function canJump(array) {
  // your code here
  let jumps = [...array.slice(0, array.length - 1)];
  if (jumps[0] > jumps.length) {
    return true;
  }
  let valid = false;
  while (jumps.length > 1) {
    for (let i = 0; i < jumps.length; i++) {
      const currentJump = jumps[i]; // 1
      const maxJump = jumps[i + currentJump]; //  1
      const between = jumps.slice(i + 1, i + currentJump + 1);
      const highNum = Math.max(...between);
      if (
        !maxJump &&
        currentJump &&
        between.length &&
        currentJump - 1 > between.length
      ) {
        jumps = [];
        return (valid = true);
      } else if (!maxJump && currentJump && !between.length) {
        console.log(currentJump, between, maxJump, highNum);
        return (valid = false);
      }
      jumps = jumps.slice(jumps.indexOf(highNum));
    }
  }

  return valid;
}*/

// I can't understand how to do it so I think I loose this one
// this is th solution :

function canJump(array) {
  if (array.length === 1) {
    return false;
  }

  for (let i = 0; i < array[0]; i += 1) {
    if (array[i + 1] === undefined) {
      return true;
    }

    if (canJump(array.slice(i + 1))) {
      return true;
    }
  }

  return false;
}

console.log(canJump([5, 0, 0, 0, 0])); // true
console.log(canJump([1, 1, 3])); // false
console.log(canJump([2, 0, 3, 5, 0, 0, 3, 4, 0, 3, 1, 0])); // true
console.log(canJump([3, 0, 2, 3])); // true
console.log(canJump([4, 1, 2, 0, 1])); // false
console.log(canJump([2, 5])); // true
console.log(canJump([3, 1, 1, 1, 5, 1]));
// recursion solution which is just pure fuck
/*
so as I understand the guy take a start with a break statement which if the array length === 1 we return back  false if not we enter the  loop the loop break when the  i < then array[0] here where my understanding stop oh no actually I get that he is removing the checked value from the array in line fuck my vscode does not have line number but its the second if condition inside the loop and he call the function again passing in the the new values or array now I do not get the first condition i the loop  what I UNDERSTAND is that if we try access the index that does not exist we get undefined and we return true lets try ask someone to explain this for me


The canJump function takes an array as input and determines whether the given game is winnable or not.

Here's a breakdown of the solution:

The function starts by checking the base case: if (array.length === 1). If the array has only one element, it means we are at the last cell, and it is not possible to make any jumps from there. So, in this case, the function returns false, indicating that the game is not winnable.

If the base case is not met, the function proceeds to loop through each possible jump from the initial cell. The loop variable i represents the number of cells to jump.

Within the loop, the function checks if the cell to jump to (array[i + 1]) is undefined. If it is undefined, it means we have reached or jumped past the end of the array, and hence the game is winnable. In this case, the function returns true.

If the cell to jump to is not undefined, the function makes a recursive call to canJump with the remaining part of the array (array.slice(i + 1)). This recursive call checks if there is a path that allows jumping from the current cell to the end of the array. If the recursive call returns true, it means there is a winnable path, and the function immediately returns true.

If none of the jumps from the initial cell lead to a winnable path, the loop continues to the next iteration, trying a different number of cells to jump.

If all possible jumps have been tried and none of them lead to a winnable path, the function reaches the end of the loop and returns false, indicating that the game is not winnable.

In summary, the function recursively explores all possible paths by making jumps from the initial cell and checks if any of these paths lead to the end of the array. If a winnable path is found, the function returns true; otherwise, it returns false.

I hope this explanation helps clarify the solution for you. Let me know if you have any further questions!







*/
