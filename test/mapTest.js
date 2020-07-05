
const assertArraysEqual = require('../assertArraysEqual') ;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);

const results3 = map(words, word => word[1]);
console.log(results3);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o']);