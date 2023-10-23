import { Beverage } from "./Beverage";

export class Tea implements Beverage {
    price(): number {
        return 1.5;
    }
}