const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅ Assertion Passed ✅:  ${actual} === ${expected} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑" ${actual} !== ${expected} `);
  }
};

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    //
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }

}, x => x.stars === 2), "noma");


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }

}, x => x.stars > 5), undefined);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }

}, x => x.stars >= 2), "Akaleri");
