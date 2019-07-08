//var {Shop, Item} = require('../src/gilded_rose.js');
var {Shop, Item} = require('../src/gilded_rose_refactored.js');

describe('Gilded Rose', function() {

  it('Once the sell by date has passed, Quality degrades twice as fast', function() {
    const gildedRose = new Shop([ new Item('foo', 1, 10) ]);
    let items = gildedRose.updateQuality(); // 1 to date
    expect(items[0].quality).toEqual(9);
    items = gildedRose.updateQuality(); // Day zero
    expect(items[0].quality).toEqual(7);
  });

  it('The Quality of an item is never negative', function() {
    const gildedRose = new Shop([ new Item('foo', 2, 1) ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  describe('"Aged Brie"', function () {
    it('actually increases in Quality the older it gets', function() {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(21);
    });

    it('The Quality of an item is never more than 50', function () {
      const gildedRose = new Shop([
        new Item('Aged Brie', 10, 50),
        //new Item('Super quality item', 10, 100),
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBeLessThanOrEqual(50);
      //expect(items[1].quality).toBeLessThanOrEqual(50);
    });
  });

  describe('"Sulfuras" (a legendary item)', function () {
    it('never has to be sold or decreases in Quality', function() {
      const gildedRose = new Shop([
        new Item('Sulfuras, Hand of Ragnaros', 10, 20)
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(20);
    });
  });

  /* "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
  Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
  Quality drops to 0 after the concert */

  describe('"Backstage passes"', function () {
    it('increases in Quality as its SellIn value approaches', function() {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    });

    it('increases by 2 when there are 10 days or less', function() {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(14);
    });

    it('increases by 3 when there are 5 days or less', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10)
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(15);
    });

    it('quality drops to 0 after the concert', function () {
      const gildedRose = new Shop([
        new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)
      ]);
      let items = gildedRose.updateQuality(); // Day 1
      expect(items[0].quality).toBeGreaterThan(0);
      items = gildedRose.updateQuality(); // Day zero
      expect(items[0].quality).toBe(0);
    });
  });

  describe('"Conjured"', function () {
    it('Should degrade in quality twice as fast as normal items', function() {
      const gildedRose = new Shop([
        new Item('Conjured', 10, 20)
      ]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18);
    });
      it('Should degrade in quality twice as fast as normal items with no sellIn', function() {
        const gildedRose = new Shop([
          new Item('Conjured', 0, 20)
        ]);
        let items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(16);
      });
  });

});
