// map function accepts 2 args (array to map, callback fn)
//returns new array based on results of callback fn
let array1 = [];
let array2 = [];

function assertArraysEqual(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    console.log(`✅ Assertion Passed: ✅ ${array1} === ${array2} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${array1} !== ${array2} `);
  }
}

function eqArrays(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }
}


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word.length);
console.log(results2);

const results3 = map(words, word => word[1]);
console.log(results3);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o']);