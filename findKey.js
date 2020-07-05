const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    //
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;