// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: create a function named boilingPoint that has a parameter named temp and uses a conditional statement to determine if the value is below, at, or above 212 degrees Fahrenheit. Use string interpolation to return the value's relationship to boiling point.

const boilingPoint = (temp) => {
    if (temp === 212) {
        return `${temp} is at boiling point`
    }
    else if (temp > 212) {
        return `${temp} is above boiling point`
    } 
    else if (temp < 212) {
        return `${temp} is below boiling point`
    }
    else {
        return "something went wrong"
    }
}
const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Use accessor method .concat() to combine two arrays into one and create new variable const padresWSRuns1984And1998. Then use built-in method .length to return the length of the combined array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresWSRuns1984And1998 = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresWSRuns1984And1998.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Create new variable curCohArray and turn the string currentCohort into an array by using .split("") then use mutator method .reverse() to reverse the characters in the array. Turn array back into a string by using mutator method .join("")

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"
const curCohArray = currentCohort.split("")
curCohArray.reverse()
console.log(curCohArray.join(""))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: use accessor method .lastIndexOf(value) to return the last index of variables givenValue1 and givenValue2 from the array myNumbers

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(givenValue2))


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Use accessor method .sort((a, b) => a - b) to order the numbers in the array from smallest to largest. Then create new variables sdSumTempHighToLow and sdWinTempHighToLow and apply .reverse() method to return the numbers from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a, b) => a - b)
const sdSumTempHighToLow = sanDiegoSummerTemperatures.reverse()
console.log(sdSumTempHighToLow)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a, b) => a - b)
const sdWinTempHighToLow = sanDiegoWinterTemperatures.reverse()
console.log(sdWinTempHighToLow)
