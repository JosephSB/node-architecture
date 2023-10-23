import { Beverage } from "../beverages/Beverage";

export default class BeverageWithMilk implements Beverage {
    private beverage: Beverage

    constructor(beverage: Beverage){
        this.beverage = beverage
    }

    price(): number {
        return this.beverage.price() + 0.10;
    }

}