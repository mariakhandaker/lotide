const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 7 for [3,4,5,6,7]", () => {
    assert.strictEqual(tail([3, 4, 5, 6, 7]), 7);
  });
  
  it("returns '6' for ['6']", () => {
    assert.strictEqual(tail(['6']), '6'); 
  });

});

