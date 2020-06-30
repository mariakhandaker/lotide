function eqArrays(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;
