const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed ✅:  ${actual} === ${expected} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑" ${actual} !== ${expected} `);
  }
};

function eqArrays(array1, array2) {
  if ((array1.length === array2.length) && (array1.every((value, index) => value === array2[index]))) {
    return true;
  } else {
    return false;
  }
}


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
