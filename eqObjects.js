const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed ✅:  ${actual} === ${expected} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑" ${actual} !== ${expected} `);
  }
};

function eqArrays(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }
}

const eqObjects = function(object1, object2) {
  let aKeys = Object.keys(object1);
  let bKeys = Object.keys(object2);
  let aValues = Object.values(object1);
  let bValues = Object.values(object2);
  let keysEqual = [];
  let valuesEqual = [];
  let answer = true;

  if (aKeys.length !== bKeys.length) {
    answer = false;
  }
  
  for (let i of aKeys) {
    for (let j of bKeys) {
      if (i === j) {
        keysEqual.push(i);
      }
    }
  }

  if (keysEqual.length !== (aKeys.length || bKeys.length)) {
    answer = false;
  }

  for (let i of aValues) {
    for (let j of bValues) {
      if (i === j && (!valuesEqual.includes(i))) {
        valuesEqual.push(i);
      }
    }
  }

  if (valuesEqual.length !== (aValues.length || bValues.length)) {
    answer = false;
  }

  return answer;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);