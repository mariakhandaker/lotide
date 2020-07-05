const countLetters = function(input) {
  let output = {};
  let newString = input.split(" ").join("");
  console.log(newString);
  //find each letter that exists, then count it, then push to output
  
  for (let i of newString) {
    if (output[i]) {
      output[i] += 1;
    } else {
      output[i] = 1;
    }
  }
  return output;
}

module.exports = countLetters;