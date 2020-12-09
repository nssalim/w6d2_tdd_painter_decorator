const assert = require('assert');
const PaintCan = require('../models/paintCan.js');

describe("paint can", function() {
    let eggshellPaint;
    let electricBrown;
    let lightGoldenRodYellow;
    beforeEach(function() {
      eggshellPaint = PaintCan(10);
      electricBrown = PaintCan(5);
      lightGoldenRodYellow = PaintCan(10);
    });


    it("should be able to check if paint can is empty", function (){
        const actual = paintCan.paintCans;
        assert.deepStrictEqual(actual, []);

    });

    it("should be able to add a can of paint to paint stock", function (){
        paintCan.addPaintCan(eggshellpaint);
        const actual = paintCan.paintCans;
        assert.deepStrictEqual(actual, [eggshellpaint]);
    });

    it("should be able to empty itself of paint", function (){
        paintCan.addPaintCan(eggshellpaint);
        const actual = paintCan.paintCans;
        assert.deepStrictEqual(actual, [eggshellpaint]);
    
  });

