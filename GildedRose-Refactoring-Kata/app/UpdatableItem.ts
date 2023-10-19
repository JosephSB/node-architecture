import { Item } from "./item";

export abstract class UpdatableItem extends Item {
    private readonly MAX_QUALITY = 50;
    private readonly MIN_QUALITY = 0;

    private item: Item;

    constructor(item: Item) {
        super(item.name, item.sellIn, item.quality)
        this.item = item
    }

    abstract update(): void 

    getSellIn() {
        return this.item.sellIn;
    }

    getItem() {
        return this.item;
    }

    decreaseQuality( decrease: number | undefined = 1) {
        if (this.item.quality > this.MIN_QUALITY) {
            this.item.quality =  this.item.quality - decrease
        }
    }

    increaseQuality() {
        if (this.item.quality < this.MAX_QUALITY ) {
            this.item.quality =  this.item.quality + 1
        }
    }

    resetQuality() {
        this.item.quality = this.item.quality - this.item.quality
    }

    decreaseSellIn() {
        this.item.sellIn = this.item.sellIn - 1;
    }

}