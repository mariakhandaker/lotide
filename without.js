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

function without (source, itemsToRemove) {
  source = [];
  itemsToRemove = [];
  for (let i = 0; i < source.length; i ++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        delete source[i];
      }
    } 
  }
  
  return source;
}