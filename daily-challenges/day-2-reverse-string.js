
/*
 * Day 2 Challenge: Reverse a String
 * Return a string with its characters in reverse order.
 */

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("hello ->", reverseString("hello"));
console.log("JavaScript ->", reverseString("JavaScript"));
console.log("Wilfred ->", reverseString("Wilfred"));
