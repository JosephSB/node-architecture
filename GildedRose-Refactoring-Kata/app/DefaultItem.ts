import { UpdatableItem } from "./UpdatableItem";
import { Item } from "./item";

export class DefaultItem extends UpdatableItem {
    constructor(item: Item) {
        super(item)
    }

    update() {
        this.decreaseSellIn()
        this.decreaseQuality()
        
        if (this.getSellIn() < 0) this.decreaseQuality()
    }
}