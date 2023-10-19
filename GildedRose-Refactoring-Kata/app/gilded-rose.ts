import { UpdatableItem } from "./UpdatableItem";

export class GildedRose {
    items: Array<UpdatableItem>;

    constructor(items = [] as Array<UpdatableItem>) {
        this.items = items;
    }

    updateQualityHandle() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].update();
        }
        return this.items
    }

}