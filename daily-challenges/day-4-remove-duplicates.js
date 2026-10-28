
/*
 * Day 4 Challenge: Remove Duplicates
 * Return a new array containing only unique values.
 */

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(
    "Original: [1, 2, 2, 3, 4, 4, 5]",
    "\nWithout duplicates:",
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
);

console.log(
    "Unique names:",
    removeDuplicates(["Wilfred", "Mary", "Wilfred", "John", "Mary"])
);
