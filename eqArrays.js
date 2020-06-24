const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed ✅:  ${actual} === ${expected} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑" ${actual} !== ${expected} `);
  }
};

let array1 = [];
let array2 = [];

function eqArrays(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }

}


assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true);
assertEqual((eqArrays([1, 2, 3], [3, 2, 1])), false);
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true);
assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false);
