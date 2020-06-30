let array1 = [];
let array2 = [];

function assertArraysEqual(array1, array2) {
  if (array1.length === array2.length && array1.every((value, index) => value === array2[index])) {
    console.log(`✅ Assertion Passed: ✅ ${array1} === ${array2} `);
  } else {
    console.log(` 🛑 Assertion Failed: 🛑 ${array1} !== ${array2} `);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item) !== true) {
      result.push(item);
    } else {
      return result;
    }
  }
};


    //loop through, then stop at condition, array.slice(i, i+1);
  
  //return slice of array with elements taken from the beginning 
  // should keep going until callback returns truthy value

//callback should only be provided item in array

//keep collecting items from array until callback provided returns truthy value

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
