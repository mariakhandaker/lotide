const findKeyByValue = function(object, value) {
  let answer;
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      answer = key;
    }
  }
  return answer;
}


module.exports = findKeyByValue;

