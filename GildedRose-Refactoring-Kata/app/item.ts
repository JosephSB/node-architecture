export class Item {
    name: string;
    sellIn: number;// cant dias para vender el articulo
    quality: number; // que tan valioso es el articulo

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}