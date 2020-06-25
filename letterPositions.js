const letterPositions = function(string) {
  let result = {};
  for (let i in string) {
    if ( string[i] !== ' ') {
      if (result[string[i]]) {
        result[string[i]].push(Number(i));
      } else {
        result[string[i]] = [Number(i)];
      }
    }
  }

  return result;
}

const string = 'lighthouse in the house';
console.log(letterPositions(string));

//return all indices in the string where each character is found