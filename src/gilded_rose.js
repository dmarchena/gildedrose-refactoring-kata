import { Item } from "./item";

class Shop {
  constructor(items = []) {
    this.items = items;
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
