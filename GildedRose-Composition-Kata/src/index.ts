import { Beverage } from "./beverages/Beverage";
import { Coffee } from "./beverages/Coffee";
import { HotChocolate } from "./beverages/HotChocolate";
import { Tea } from "./beverages/Tea";
import { BeverageWithCream } from "./decorators/BeverageWithCream";
import BeverageWithMilk from "./decorators/BeverageWithMilk";

describe('BeveragesPricingTest', () => {
    it('computes coffee price', () => {
        const coffee: Beverage = new Coffee();
        expect(coffee.price()).toBeCloseTo(1.20, 3);
    });

    it('computes tea price', () => {
        const tea: Beverage = new Tea();
        expect(tea.price()).toBeCloseTo(1.50, 3);
    });

    it('computes hot chocolate price', () => {
        const hotChocolate: Beverage = new HotChocolate();
        expect(hotChocolate.price()).toBeCloseTo(1.45, 3);
    });

    it('computes tea with milk price', () => {
        const tea: Beverage = new Tea();
        const TeaWithMilk  =new BeverageWithMilk(tea);

        expect(TeaWithMilk.price()).toBeCloseTo(1.60, 3);
    });

    it('computes coffee with milk price', () => {
        const coffee: Beverage = new Coffee();
        const coffeeWithMilk  =new BeverageWithMilk(coffee);

        expect(coffeeWithMilk.price()).toBeCloseTo(1.30, 3);
    });

    it('computes coffee with milk and cream price', () => {
        const coffee: Beverage = new Coffee();
        const coffeeWithMilk  =new BeverageWithMilk(coffee);
        const coffeeWithMilkAndCream = new BeverageWithCream(coffeeWithMilk);
        
        expect(coffeeWithMilkAndCream.price()).toBeCloseTo(1.45, 3);
    });

    it('computes hot chocolate with cream price', () => {
        const hotChocolate: Beverage = new HotChocolate();
        const hotChocolateWithCream = new BeverageWithCream(hotChocolate);

        expect(hotChocolateWithCream.price()).toBeCloseTo(1.60, 3);
    });
});