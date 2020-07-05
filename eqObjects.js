const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;