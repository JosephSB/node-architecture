import { Item } from "./item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQualityHandle() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case 'Aged Brie':
                    this.updateQualityAgedBrie(this.items[i])
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.updateQualityBackstage(this.items[i])
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    
                    break;
                case 'Conjured Mana Cake':
                    this.updateQualityConjure(this.items[i])
                    break;
                default:
                    this.updateQualityGeneral(this.items[i])
                    break;
            }
        }
        return this.items
    }

    updateQualityBackstage(item: Item) {
        this.decreaseSellIn(item)
        this.increaseQuality(item)

        if (item.sellIn < 11) this.increaseQuality(item)
        if (item.sellIn  < 6) this.increaseQuality(item)

        if (item.sellIn < 0) item.quality = item.quality - item.quality
        
    }

    updateQualityAgedBrie(item: Item) {
        this.decreaseSellIn(item)
        this.increaseQuality(item)

        if (item.sellIn < 0) this.increaseQuality(item)
    }

    updateQualityConjure(item: Item){
        this.decreaseSellIn(item)
        this.decreaseQuality(item , 2)

        if (item.sellIn < 0) this.decreaseQuality(item, 2)
    }

    updateQualityGeneral(item: Item){
        this.decreaseSellIn(item)
        this.decreaseQuality(item)
        
        if (item.sellIn < 0) this.decreaseQuality(item)
    }

    decreaseQuality(item: Item, decrease: number | undefined = 1) {
        if (item.quality > 0) {
            item.quality =  item.quality - decrease
        }
    }

    increaseQuality(item: Item) {
        if (item.quality < 50 ) {
            item.quality =  item.quality + 1
        }
    }

    decreaseSellIn(item: Item) {
        item.sellIn = item.sellIn - 1;
    }
}