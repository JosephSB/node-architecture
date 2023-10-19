import { UpdatableItem } from "./UpdatableItem";
import { Item } from "./item";

export class AgedBrieItem extends UpdatableItem {

    constructor(item: Item) {
        super(item)
    }

    update() {
        this.decreaseSellIn()
        this.increaseQuality()

        if (this.getSellIn()) this.increaseQuality()
    }
}