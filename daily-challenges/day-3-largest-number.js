
/*
 * Day 3 Challenge: Find the Largest Number
 * Find and return the largest number in an array.
 */

function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log("Largest in [4, 9, 2, 15, 7]:", findLargest([4, 9, 2, 15, 7]));
console.log("Largest in [10, 25, 3, 8]:", findLargest([10, 25, 3, 8]));
console.log("Largest in [-5, -2, -10]:", findLargest([-5, -2, -10]));
