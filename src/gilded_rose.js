import { getMixinForItem } from './item/update_quality_mixin';

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items.map(item => Object.assign(item, getMixinForItem(item)));
  }
  updateQuality() {
    this.items = this.items.map(item => item.updateQuality());
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
