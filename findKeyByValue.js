const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed ✅:  ${actual} === ${expected} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑" ${actual} !== ${expected} `);
  }
};

const findKeyByValue = function(object, value) {
  let answer;
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      answer = key;
    }
  }
  return answer;
}
