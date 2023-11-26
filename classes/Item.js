/**
 * This class is an object to create and save Items.
 * It was made if I would have implemented a stat System for each item
 * because the name would then not be enough.
 */
export default class Item{
    constructor(name){
        this.name = name;
    }

    static ITEMLIST = new Map([
        
        ["Head",new Item("Head")],
        ["Vampire",new Item("Vampire")],
        ["Fruit",new Item("Fruit")],
        ["Leg",new Item("Leg")],
        ["Heart",new Item("Heart")],
        ["Brain",new Item("Brain")],
        ["Lifeorb",new Item("Lifeorb")],
        ["Body",new Item("Body")],
    ]);
}