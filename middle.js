function middle(array1) {
  let middleElement = [];
  let a = array1.length;
  let middleIndex = (array1.length + 1) /2;
  if (a <= 2) {
    middleElement;
  } else if (a % 2 !== 0) {
    middleElement.push(middleIndex);
  } else if (a % 2 === 0) {
    let b = Math.floor(middleIndex);
    let c = Math.ceil(middleIndex)
    middleElement.push(b, c);
  }
  return middleElement;
}

module.exports = middle;