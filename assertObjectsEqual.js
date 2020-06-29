
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ✅ ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${inspect(actual)} !== ${inspect(expected)} `);
  }
};


assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'});
assertObjectsEqual([1, 2, 3], [3, 2, 1]);
assertObjectsEqual(["1", "2", "3"], ["1", "2", "3"]);