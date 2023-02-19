// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: applying the built-in method .length to the variable cohort, my program will count the number of characters within the string "LEARN 2023" to return its length of 10. 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: greeting[4] is returning the value of the string at it's 4th index location. Since the index starts at 0, the letter "o" in "Hello World!" is at the index of 4

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: the variable languages is taking on [1] which returns the second item in the array "Ruby" because it is at the index of 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: error
// b) Verify and explain: output was "weekend.toUpperCase() is not a function" because .toUpperCase() can only be applied to a string. weekendDays is an array that contains strings

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: dataTypes.length will return "4" as the length of the array, but typeof checks what kind of data "4" is and then returns the result, which is number because 4 is a number. 
