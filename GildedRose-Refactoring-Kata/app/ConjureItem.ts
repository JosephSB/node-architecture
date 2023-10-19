import { UpdatableItem } from "./UpdatableItem";
import { Item } from "./item";

export class ConjureItem extends UpdatableItem {

    constructor(item: Item) {
        super(item)
    }

    update() {
        this.decreaseSellIn()
        this.decreaseQuality(2)

        if (this.getSellIn() < 0) this.decreaseQuality(2)
    }
}