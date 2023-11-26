import Item from "./Item.js";

/**
 * This is where the stats and items can be saved
 */
export default class Character {
    constructor(hp) {
        this.hp = hp;
        this.items = new WeakSet();
    }

    looseHP = (hp) => {
        this.hp -= hp
    }

    addItem = (item) => {
        this.items.add(item);
    }

    removeItem = (item) => {
        this.items.delete(item);
    }

    hasItem(itemName) {
        const value = this.items.has(Item.ITEMLIST.get(itemName));
        return value;
    }
}