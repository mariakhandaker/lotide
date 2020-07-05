const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

assertArraysEqual(takeUntil([1, 2, 3], 2), [1]);
assertArraysEqual(takeUntil([1, 2, 3, 5,6,7,8], 5), [1,2,3]);
assertArraysEqual(takeUntil(["1", "2", "3", 5, 6, 7], "2"),["1"]);
assertArraysEqual(takeUntil(["1", "2", "3",6,5,4], 5), ["1", "2", "3",6]);