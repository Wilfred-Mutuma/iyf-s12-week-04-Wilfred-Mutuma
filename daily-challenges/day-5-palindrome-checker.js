
/*
 * Day 5 Challenge: Palindrome Checker
 * Check whether a word or phrase reads the same
 * forward and backward, ignoring spaces and letter case.
 */

function isPalindrome(text) {
    const cleanedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return cleanedText === cleanedText.split("").reverse().join("");
}

console.log("madam:", isPalindrome("madam"));
console.log("Racecar:", isPalindrome("Racecar"));
console.log("hello:", isPalindrome("hello"));
console.log("Never odd or even:", isPalindrome("Never odd or even"));

