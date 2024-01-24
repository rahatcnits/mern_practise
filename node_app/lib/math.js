/*
 * Basic Node App Example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Mohammad Rahat
 * Date: 24/01/2024
 */

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;

  return Math.floor(Math.random() * (maximum - minimum + 1) - min);
};

// Export the library
module.exports = math;
