/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b) {
  // complete this function
  let decimal = [r, g, b];
  let hex = [];
  for (let i = 0; i < decimal.length; i++) {
    if (decimal[i] > 255) {
      decimal[i] = 255;
    }
    if (decimal[i] < 0) decimal[i] = 0;
    decimal[i] = Math.round(decimal[i]);
    // if (decimal[i] === 0) {
    //   hex.push("00");
    // } else {
    let value = decimal[i].toString(16);

    hex.push(value.length === 1 ? `0${value}` : value);
    // }
  }
  console.log(hex);
  return hex.join("").toUpperCase();
}

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
rgb(210, 251, 10);
