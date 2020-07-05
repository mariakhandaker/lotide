const takeUntil = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != callback) {
      result.push(array[i]);
    } else {
      return result;
    }
  
  }
};

module.exports = takeUntil;

// const takeUntil = function (array, callback) {
//   let result = [];

//   for (element of array) {
//     if (callback(element)) {
//       return result;
//     } else {
//       result.push(element);
//     }
//   }
// };