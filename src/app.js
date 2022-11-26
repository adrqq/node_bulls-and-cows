/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('readline');

const uniqNumberArr = require('./getRandomNumber').join('');

console.log(uniqNumberArr);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = () => {
  terminal.question('Guess the number: ', (answer) => {
    if (answer.length !== 4) {
      console.log(`Please enter a number with 4 digits`);
      game();
    } else if (isNaN(+answer)) {
      console.log(`Please enter a NUMBER`);
      game();
    } else if (answer !== [...new Set(answer)].join('')) {
      console.log(`Please enter a number with unique digits`);
      game();
    } else if (answer === uniqNumberArr) {
      console.log(`You guessed correctly`);
      terminal.close();
    } else {
      const bulls = [...answer]
        .filter((item, index) => item === uniqNumberArr[index]).length;
      const cows = [...answer]
        .filter((item) => uniqNumberArr.includes(item)).length - bulls;

      console.log(`You guessed incorrectly!` + ` Cows: ${cows} Bulls: ${bulls}`);
      game();
    }
  });
};

game();
