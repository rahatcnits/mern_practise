/*
 * Basic Node App Example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Mohammad Rahat
 * Date: 24/01/2024
 */

// Dependencies
const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes");

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printAQuote = function printAQuote() {
  const allQuotes = quotesLibrary.allQuotes();

  const numberOfQuotes = allQuotes.length;

  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  const selectedQuotes = allQuotes[randomNumber + 1];
  console.log(selectedQuotes);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// l n q r a m

// Invoke the loop
app.indefiniteLoop();
