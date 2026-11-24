"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validatePassword(password) {
    const hasMinimumLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (hasMinimumLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber) {
        return "Strong Password";
    }
    else {
        return "Weak Password";
    }
}
// Test the function
console.log(validatePassword("Password123"));
//# sourceMappingURL=password-validator.js.map