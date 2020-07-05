const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }//iterate over everything in input array
  // if it exists true in object, count instances in array
  //    if no instances exist, no need to push
  //     else push
  // if false, no need to count
  return results;
}

module.exports = countOnly;
