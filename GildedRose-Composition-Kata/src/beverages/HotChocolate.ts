import { Beverage } from "./Beverage";

export class HotChocolate implements Beverage {
    price(): number {
        return 1.45;
    }
}