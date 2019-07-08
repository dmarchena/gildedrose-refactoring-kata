class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50;
const MIN_SELLIN = 0;
const BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const CONJURED = 'Conjured';

class Shop {
    constructor(items=[]){
        this.items = items;
    }

    updateBrie(item) {
        item.sellIn--;

        if (item.quality < MAX_QUALITY) {
            item.quality++;

            if (item.sellIn < MIN_SELLIN) {
                item.quality++;
            }
        }

        return item;
    }

    updateSulfuras(item) {
        return item;
    }

    updateBackstage(item) {
        item.sellIn--;

        if (item.quality < MAX_QUALITY) {
            item.quality++;

            if (item.sellIn < 10) {
                item.quality++;
            }

            if (item.sellIn < 5) {
                item.quality++;
            }
        }

        if (item.sellIn < 0) {
            item.quality = 0;
        }

        return item;
    }

    updateDefault(item) {
        item.sellIn--;

        if (item.quality > 0) {
            item.quality--;

            if (item.sellIn < 0 && item.quality > 0) {
                item.quality--;
            }
        }

        return item;
    }

    updateConjured(item) {
        item.sellIn--;

        if (item.quality > 1) {
            item.quality -= 2;

            if (item.sellIn < 0 && item.quality > 1) {
                item.quality -= 2;
            }
        }

        return item;
    }

    updateQuality() {
        return this.items.map(currentItem => {
            switch (currentItem.name) {
                case BRIE:
                    return this.updateBrie(currentItem);
                case BACKSTAGE:
                    return this.updateBackstage(currentItem);
                case SULFURAS:
                    return this.updateSulfuras(currentItem);
                case CONJURED:
                    return this.updateConjured(currentItem);
                default:
                    return this.updateDefault(currentItem);
            }
        });
    }
}
module.exports = {
    Item,
    Shop
}
