"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function analyzeNumber(number) {
    // Check whether the number is positive, negative, or zero
    if (number > 0) {
        console.log("Positive");
    }
    else if (number < 0) {
        console.log("Negative");
    }
    else {
        console.log("Zero");
    }
    // Check whether the number is even or odd
    if (number % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
    // Check whether the number is divisible by both 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Divisible by both 3 and 5");
    }
    else {
        console.log("Not divisible by both 3 and 5");
    }
}
// Test the function
analyzeNumber(30);
//# sourceMappingURL=number-analyzer.js.map