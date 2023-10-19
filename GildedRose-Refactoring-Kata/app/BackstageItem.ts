import { UpdatableItem } from "./UpdatableItem";
import { Item } from "./item";

export class BackstageItem extends UpdatableItem {

    constructor(item: Item) {
        super(item)
    }

    update() {
        this.decreaseSellIn()
        this.increaseQuality()

        if (this.getSellIn() < 11) this.increaseQuality()
        if (this.getSellIn()  < 6) this.increaseQuality()

        if (this.getSellIn() < 0) this.resetQuality()
    }
}