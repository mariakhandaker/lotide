const assertArraysEqual = require('../assertArraysEqual');

const without = require('../without')

console.log(without(["1", "2", "3"], ["3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
