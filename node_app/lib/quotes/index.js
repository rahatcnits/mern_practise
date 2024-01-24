/*
 * Basic Node App Example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Mohammad Rahat
 * Date: 24/01/2024
 */

// Dependencies
const fs = require("fs");

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf-8");

  const arrayOfQuotes = fileContents.split(/\r?\n/);

  return arrayOfQuotes;
};

// Export the library
module.exports = quotes;
