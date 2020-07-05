function assertArraysEqual(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    console.log(`✅ Assertion Passed: ✅ ${array1} === ${array2} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${array1} !== ${array2} `);
  }
}

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


assertArraysEqual(takeUntil([1, 2, 3], 2), [1]);
assertArraysEqual(takeUntil([1, 2, 3, 5,6,7,8], 5), [1,2,3]);
assertArraysEqual(takeUntil(["1", "2", "3", 5, 6, 7], "2"),["1"]);
assertArraysEqual(takeUntil(["1", "2", "3",6,5,4], 5), ["1", "2", "3",6]);


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