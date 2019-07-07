import { getMixinForItemWithName } from './update_quality_mixin';

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    Object.assign(this, getMixinForItemWithName(name));
  }
}

module.exports = {
  Item
}