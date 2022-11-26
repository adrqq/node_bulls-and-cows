/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const generateRandomNumber = () => Math.floor(Math.random() * 9);
const uniqNumberArr = [];

function randomNumber(n) {
  if (!uniqNumberArr.includes(n)) {
    uniqNumberArr.push(n);
  }
};

for (let i = 0; uniqNumberArr.length < 4; i++) {
  randomNumber(generateRandomNumber());
}

module.exports = uniqNumberArr;
