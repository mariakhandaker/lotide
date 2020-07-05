const assertObjectsEqual = require ('../assertObjectsEqual');


assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'});
assertObjectsEqual({b: '7', c: '1'}, {c: '1', b: '7'});
assertObjectsEqual({"1": "one", "2": "two", "3": "three"}, {"1": "one", "3" : "three", "2": "two"});