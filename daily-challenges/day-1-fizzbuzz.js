
/*
 * Day 1 Challenge: FizzBuzz
 * Print numbers from 1 to 100.
 * Multiples of 3: Fizz
 * Multiples of 5: Buzz
 * Multiples of both: FizzBuzz
 */

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
