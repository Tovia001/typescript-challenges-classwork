const prices: number[] = [1500, 2500, 3000, 4500, 2000];

let total: number = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + (prices[i] ?? 0);
}

let average: number = prices.length > 0
    ? total / prices.length
    : 0;

let highest: number = prices[0] ?? 0;
let lowest: number = prices[0] ?? 0;

for (let i = 0; i < prices.length; i++) {
    const price: number = prices[i] ?? 0;

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
