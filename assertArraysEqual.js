const eqArrays = require('./eqArrays');

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true && array1.every((value, index) => value === array2[index])) {
    console.log(`✅ Assertion Passed: ✅ ${array1} === ${array2} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${array1} !== ${array2} `);
  }
}

module.exports = assertArraysEqual;
