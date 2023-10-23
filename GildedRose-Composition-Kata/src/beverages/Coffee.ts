import { Beverage } from "./Beverage";

export class Coffee implements Beverage {
    price(): number {
        return 1.2;
    }

}