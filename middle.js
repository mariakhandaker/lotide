let array1 = [];
let array2 = [];

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    console.log(`✅ Assertion Passed: ✅ ${array1} === ${array2} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${array1} !== ${array2} `);
  }
};

function middle(array1) {
  let middleElement = [];
  let a = array1.length;
  let middleIndex = (array1.length + 1) /2;
  if (a <= 2) {
    middleElement;
  } else if (a % 2 !== 0) {
    middleElement.push(middleIndex);
  } else if (a % 2 === 0) {
    let b = Math.floor(middleIndex);
    let c = Math.ceil(middleIndex)
    middleElement.push(b, c);
  }
  return middleElement;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 