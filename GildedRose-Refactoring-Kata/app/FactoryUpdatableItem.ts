import { AgedBrieItem } from "./AgedBrieItem";
import { BackstageItem } from "./BackstageItem";
import { ConjureItem } from "./ConjureItem";
import { DefaultItem } from "./DefaultItem";
import { SulfurasItem } from "./SulfurasItem";
import { Item } from "./item";

export class FactoryUpdatableItem {
    static create(name: string, sellIn: number, quality: number) {
        const item = new Item(name,sellIn,quality);

        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrieItem(item)
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstageItem(item)
            case 'Sulfuras, Hand of Ragnaros':
                return new SulfurasItem(item)
            case 'Conjured Mana Cake':
                return new ConjureItem(item)
            default:
                return new DefaultItem(item)
        }

    }
}