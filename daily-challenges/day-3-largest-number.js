
/*
 * Day 3 Challenge: Find the Largest Number
 * Find the largest number using a loop and reduce().
 */

// Method 1: Using a for loop
function findLargestWithLoop(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Method 2: Using reduce()
function findLargestWithReduce(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}

// Test both methods
const numbers = [4, 9, 2, 15, 7];

console.log("Using loop:", findLargestWithLoop(numbers));
console.log("Using reduce():", findLargestWithReduce(numbers));
console.log("Negative numbers:", findLargestWithReduce([-5, -2, -10]));
console.log("Empty array:", findLargestWithReduce([]));
