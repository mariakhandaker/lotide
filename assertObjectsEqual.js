
const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }

    if (typeof object1[key] !== typeof object2[key]) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    if ((typeof object1[key] === typeof object2[key]) && (object1[key] !== object2[key])) {
      return false;
    }
  }
  
  return true;
}


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: ✅ ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${inspect(actual)} !== ${inspect(expected)} `);
  }
};


assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'});
assertObjectsEqual({b: '7', c: '1'}, {c: '1', b: '7'});
assertObjectsEqual({"1": "one", "2": "two", "3": "three"}, {"1": "one", "3" : "three", "2": "two"});