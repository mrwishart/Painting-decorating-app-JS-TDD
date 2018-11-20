const assert = require("assert");
const PaintCan = require('../paint_can.js');

describe ('PaintCan', function(){
  let paintcan;
  beforeEach(function(){
    paintcan = new PaintCan(25);
  });

  it('has paint', function(){
    const actual = paintcan.volume;
    const expected = 25;

    assert.strictEqual(actual, expected);
  });
});
