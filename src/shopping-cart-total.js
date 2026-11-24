"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prices = [1500, 2500, 3000, 4500, 2000];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + (prices[i] ?? 0);
}
let average = prices.length > 0
    ? total / prices.length
    : 0;
let highest = prices[0] ?? 0;
let lowest = prices[0] ?? 0;
for (let i = 0; i < prices.length; i++) {
    const price = prices[i] ?? 0;
    if (price > highest) {
        highest = price;
    }
    if (price < lowest) {
        lowest = price;
    }
}
console.log("Total:", total);
console.log("Average:", average);
console.log("Most expensive:", highest);
console.log("Cheapest:", lowest);
console.log("Number of items:", prices.length);
//# sourceMappingURL=shopping-cart-total.js.map