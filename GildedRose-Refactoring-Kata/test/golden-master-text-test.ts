import { GildedRose } from '../app/gilded-rose';
import { FactoryUpdatableItem } from '../app/FactoryUpdatableItem';

const items = [
    FactoryUpdatableItem.create("+5 Dexterity Vest", 10, 20), //
    FactoryUpdatableItem.create("Aged Brie", 2, 0), //
    FactoryUpdatableItem.create("Elixir of the Mongoose", 5, 7), //
    FactoryUpdatableItem.create("Sulfuras, Hand of Ragnaros", 0, 80), //
    FactoryUpdatableItem.create("Sulfuras, Hand of Ragnaros", -1, 80),
    FactoryUpdatableItem.create("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    FactoryUpdatableItem.create("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    FactoryUpdatableItem.create("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    FactoryUpdatableItem.create("Conjured Mana Cake", 3, 6)
];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        const elementItem = element.getItem()
        console.log(elementItem.name + ' ' + elementItem.sellIn + ' ' + elementItem.quality);

    });
    console.log();
    gildedRose.updateQualityHandle();
}