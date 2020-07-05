const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey   = require('./findKey');
const findKeyByValue   = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const eqArrays   = require('./eqArrays');
const eqObjects   = require('./eqObjects');
const countOnly = require('./countOnly');
const takeUntil = require('./takeUntil');

module.exports = {
  head,
  tail,
  middle, 
  findKey, 
  findKeyByValue, 
  letterPositions, 
  eqArrays, 
  eqObjects, 
  countOnly, 
  takeUntil
};


console.log(module.exports)