// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))


// a) Your answer: "tangerine", "magenta", "lilac", "daffodil" "indigo"
// b) Verify and explain: I got this one wrong, had to do some research on the .push method. colors.push("indigo") adds indigo to the end of the 'colors' array, but the console.log() in question is only asking for the overall length of the array in question after using .push. we can verify that "indigo" was added to the array with console.log(colors) on a new line.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the code counts the total amount of characters in a string. empty spaces are still characters.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: 'o'
// b) Verify and explain: the code is asking for whatever is in the 4th index position of greeting, in this case, the letter 'o'

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: 'Ruby'
// b) Verify and explain: the code is asking for whatever is in the index position of whatever the value of the 'index' constant is, in this case the number 1, which gives us the string 'Ruby'.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: 'SATURDAY', 'SUNDAY'
// b) Verify and explain: I failed to notice that weekendDays was an array, not a string. as .toUpperCase() will only work on strings, this code throws an error

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Number
// b) Verify and explain: the code is asking for the type of whatever dataTypes.length is. since .length checks a given variable (the array 'dataTypes' with 4 strings inside in this instance) and returns that length as a number, 4,  typeof returns "number".