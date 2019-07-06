function updateStrategyMixinFactory({
  getDegradeRate,
  nextQuality,
  nextSellIn = sellIn => sellIn - 1,
}) {
  return {
    updateQuality() {
      this.quality = nextQuality(this.quality, getDegradeRate(this));
      this.sellIn = nextSellIn(this.sellIn);
      return this;
    }
  };
}

const updateStrategies = {
  defaultStrategyMixin: updateStrategyMixinFactory({
    getDegradeRate: obj => obj.sellIn > 0 ? -1 : -2,
    nextQuality: (quality, degradeRate) => quality > 0
      ? quality + degradeRate
      : quality,
  }),
  agedBrieStrategyMixin: updateStrategyMixinFactory({
    getDegradeRate: obj => 1,
    nextQuality: (quality, degradeRate) => quality < 50
      ? quality + degradeRate
      : quality,
  }),
  backstagePassesStrategyMixin: updateStrategyMixinFactory({
    getDegradeRate: obj => {
      let rate = 0;
      if (obj.sellIn > 10) {
        rate = 1
      } else if (obj.sellIn > 5) {
        rate = 2
      } else if (obj.sellIn > 0) {
        rate = 3
      } else {
        rate = -obj.quality
      }
      return rate;
    },
    nextQuality: (quality, degradeRate) => {
      quality = quality < 50
        ? quality + degradeRate
        : quality
      return quality > 50 ? 50 : quality;
    },
  }),
  sulfurasStrategyMixin: updateStrategyMixinFactory({
    getDegradeRate: obj => 0,
    nextQuality: quality => quality,
    nextSellIn: sellIn => sellIn,
  })
}

const getMixinForItem = (function () {
  const agedBrie = 'Aged Brie';
  const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
  const sulfuras = 'Sulfuras, Hand of Ragnaros';

  const updateStrategiesByFirstWord = {
    [agedBrie]: updateStrategies.agedBrieStrategyMixin,
    [backstagePasses]: updateStrategies.backstagePassesStrategyMixin,
    [sulfuras]: updateStrategies.sulfurasStrategyMixin
  };

  return item => 
    updateStrategiesByFirstWord[item.name] ||
    updateStrategies.defaultStrategyMixin;
})();

module.exports = {
  getMixinForItem
}