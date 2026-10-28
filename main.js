
console.log("Hello, Wilfred! Welcome to JavaScript.");

// My personal variables
let myName = "Wilfred Mutuma";
let myAge = 35;
let isStudent = true;
let favoriteColors = ["red", "black", "white"];
let today = new Date();

// Display my variables
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// Check data types
console.log("Name data type:", typeof myName);
console.log("Age data type:", typeof myAge);
console.log("Student status data type:", typeof isStudent);

// Practise let and const
let score = 100;
score = 150;
console.log("Updated score:", score);

const PI = 3.14159;
console.log("Value of PI:", PI);


console.log("----- NUMBER OPERATIONS -----");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

let count = 0;
count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);


console.log("----- STRING OPERATIONS -----");

let firstName = "Wilfred";
let lastName = "Mutuma";

// Join strings together
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Find the length of a string
console.log("Name length:", fullName.length);

// Change letter case
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());

// Access individual characters
console.log("First character:", fullName[0]);
console.log("Last character:", fullName[fullName.length - 1]);

// Check whether a string contains text
console.log("Contains Wilfred:", fullName.includes("Wilfred"));


console.log("----- COMPARISON OPERATORS -----");

let age = 35;

console.log("Is age equal to 35?", age === 35);
console.log("Is age not equal to 20?", age !== 20);
console.log("Is age greater than 18?", age > 18);
console.log("Is age less than 50?", age < 50);
console.log("Is age at least 35?", age >= 35);

console.log("----- LOGICAL OPERATORS -----");

let hasID = true;
let isRegistered = true;

console.log("Has ID AND is registered:", hasID && isRegistered);
console.log("Has ID OR is registered:", hasID || isRegistered);
console.log("Does not have ID:", !hasID);


console.log("----- FUNCTIONS -----");

// A function that greets someone
function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}

console.log(greetUser("Wilfred"));
console.log(greetUser("Rodricks"));

// A function that adds two numbers
function addNumbers(a, b) {
    return a + b;
}

console.log("10 + 5 =", addNumbers(10, 5));
console.log("20 + 8 =", addNumbers(20, 8));

// A function that calculates the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

console.log("Rectangle area:", calculateArea(10, 5));


console.log("----- IF / ELSE CONDITIONS -----");

let studentMarks = 75;

if (studentMarks >= 80) {
    console.log("Grade: A");
} else if (studentMarks >= 70) {
    console.log("Grade: B");
} else if (studentMarks >= 60) {
    console.log("Grade: C");
} else if (studentMarks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F - Fail");
}

// Check whether a number is even or odd
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

// Check voting eligibility
let votingAge = 35;

if (votingAge >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote yet.");
}

console.log("----- LOOPS -----");

// FOR loop: count from 1 to 5
console.log("Counting from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// WHILE loop: count from 1 to 3
console.log("Counting with a while loop:");

let loopCount = 1;

while (loopCount <= 3) {
    console.log(loopCount);
    loopCount++;
}

// Loop through an array
console.log("My favorite colors:");

let colors = ["red", "black", "white"];

for (let color of colors) {
    console.log(color);
}


console.log("----- CALCULATOR MINI-PROJECT -----");

function calculate(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Error: Cannot divide by zero.";
        }
        return num1 / num2;
    } else {
        return "Error: Invalid operator.";
    }
}

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("10 % 5 =", calculate(10, "%", 5));


console.log("----- ARRAYS PRACTICE -----");

let studentNames = ["Wilfred", "Rodricks", "Mary", "John"];

// Display the entire array
console.log("All students:", studentNames);

// Access individual items (array indexes start at 0)
console.log("First student:", studentNames[0]);
console.log("Second student:", studentNames[1]);

// Count the students
console.log("Number of students:", studentNames.length);

// Add a student
studentNames.push("Grace");
console.log("After adding Grace:", studentNames);

// Remove the last student
studentNames.pop();
console.log("After removing the last student:", studentNames);

// Loop through all students
console.log("Student list:");

for (let student of studentNames) {
    console.log(student);
}


console.log("----- OBJECTS PRACTICE -----");

// Create a student object
let student = {
    name: "Wilfred",
    age: 35,
    course: "Web Development",
    marks: 85
};

// Display the whole object
console.log("Student details:", student);

// Access individual properties
console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Student course:", student.course);
console.log("Student marks:", student.marks);

// Update a property
student.marks = 90;
console.log("Updated marks:", student.marks);

// Add a new property
student.email = "wilfredmtm@gmail.com";
console.log("Student email:", student.email);

// Check the student's result
if (student.marks >= 50) {
    console.log(student.name + " has passed.");
} else {
    console.log(student.name + " has failed.");
}


console.log("----- STUDENT GRADE TRACKER -----");

// Store several students as objects inside an array
let students = [
    { name: "Wilfred", marks: 85 },
    { name: "Rodricks", marks: 72 },
    { name: "Mary", marks: 91 },
    { name: "John", marks: 45 }
];

// Display each student's name, marks, and grade
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}

for (let student of students) {
    console.log(
        student.name +
        " | Marks: " + student.marks +
        " | Grade: " + getGrade(student.marks)
    );
}

// Calculate the class average
let totalMarks = 0;

for (let student of students) {
    totalMarks += student.marks;
}

let average = totalMarks / students.length;

console.log("Number of students:", students.length);
console.log("Total marks:", totalMarks);
console.log("Class average:", average.toFixed(2));


console.log("----- JSON PRACTICE -----");

// Create a JavaScript object
let person = {
    name: "Wilfred Mutuma",
    age: 35,
    profession: "Electrical Engineer"
};

// Convert the object into JSON text
let jsonText = JSON.stringify(person);
console.log("JSON text:", jsonText);

// Convert JSON text back into a JavaScript object
let parsedPerson = JSON.parse(jsonText);
console.log("Parsed name:", parsedPerson.name);
console.log("Parsed profession:", parsedPerson.profession);
console.log("Parsed age:", parsedPerson.age);


console.log("----- DAY 1: FIZZBUZZ -----");

for (let number = 1; number <= 20; number++) {
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

console.log("----- DAY 2: REVERSE A STRING -----");

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("hello ->", reverseString("hello"));
console.log("JavaScript ->", reverseString("JavaScript"));
console.log("Wilfred ->", reverseString("Wilfred"));


console.log("----- DAY 3: LARGEST NUMBER -----");

function findLargest(numbers) {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("Largest number:", findLargest([4, 9, 2, 15, 7]));
console.log("Largest number:", findLargest([100, 25, 300, 50]));
console.log("Largest number:", findLargest([-5, -2, -10, -1]));

console.log("----- DAY 4: REMOVE DUPLICATES -----");

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(
    "Original: [1, 2, 2, 3, 1]",
    "Result:",
    removeDuplicates([1, 2, 2, 3, 1])
);

console.log(
    "Original: [5, 5, 5, 10, 10, 15]",
    "Result:",
    removeDuplicates([5, 5, 5, 10, 10, 15])
);

console.log(
    "Original: [4, 3, 4, 2, 3, 1]",
    "Result:",
    removeDuplicates([4, 3, 4, 2, 3, 1])
);

console.log("----- DAY 5: PALINDROME CHECKER -----");

function isPalindrome(text) {
    let cleanedText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    let reversedText = cleanedText
        .split("")
        .reverse()
        .join("");

    return cleanedText === reversedText;
}

console.log("madam:", isPalindrome("madam"));
console.log("level:", isPalindrome("level"));
console.log("hello:", isPalindrome("hello"));
console.log("Racecar:", isPalindrome("Racecar"));
console.log("A man, a plan, a canal: Panama:", isPalindrome("A man, a plan, a canal: Panama"));
