const without = function(source, itemsToRemove) {
  const solved = [];
  for (let i of source) {
    if (itemsToRemove.includes(i) !== true) {
      solved.push(i);
    }
  }
  return solved;
}

module.exports = without;