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

// // Pseudo code: A function holding an if/else statement that will display a set message if currentTemp's value is a number that is above, below, or at 212, the boiling point of water. will throw an error in any other case.

// function functionName(numberInput) {
//     if (numberInput > 212) {
//         return "message about temparature being high"
//     } else if (numberInput === 212) {
//         return "message about temparature being spot on"
//     } else if (numberInput < 212) {
//         return "message about temparature being low"
//     } else {
//         return "error message"
//     }
// }

// ANSWER:
function tempCheck(currentTemp) {
    if (currentTemp > 212) {
        return `"${currentTemp} is above boiling point"`
    } else if (currentTemp === 212) {
        return `"${currentTemp} is at boiling point"`
    } else if (currentTemp < 212) {
        return `"${currentTemp} is below boiling point"`
    } else {
        return ("error, please recheck temperature")
    }
}
const temp1 = 42
console.log(tempCheck(temp1));
// Expected output: "42 is below boiling point"

const temp2 = 350
console.log(tempCheck(temp2));
// Expected output: "350 is above boiling point"

const temp3 = 212
console.log(tempCheck(temp3));
// Expected output: "212 is at boiling point"

// Bonus round! checking the error state:
// const temp4 = "jellybeans"
// console.log(tempCheck(temp4));




// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: The example code below will create a new variable that calls the .concat method on the two arrays, then calls .length on the new stored array. this will combine the two arrays and then count the number of entries within.

// const string1 = [1, 2, 3];
// const string2 = ['a', 'b', 'c'];

// const stringsDoBeConcatinatingTho = string1.concat(string2); //---> now reads [1, 2, 3, 'a', 'b', 'c',]
// console.log(stringsDoBeConcatinatingTho.length); //---> returns 6, the number of values inside the array




// ANSWER:
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4];
const padres1998WorldSeriesRuns = [6, 3, 5, 3];

const arraySmusher = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
console.log(arraySmusher.length)
// Expected output: 9




// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: trying a more "Line-by-line" explanation here.
 /* function stringFlipper(stringInput) {
        let step1 = stringInput.split("");       // ----> Takes arguement (stringInput) and splits into an array, the quotation marks argument labels each element as a string.
        let step2 = step1.reverse();             // ----> Reverses the order of the array stored inside step1.
        let step3 = step2.join("");              // ----> joins the array held in step2 together as a string
         return step3;                           // ----> halts the function, returning the value of step3.
 }; */

const currentCohort = "Alpha 2023"
function cohortReversio(input) {
    let step1 = input.split("");    // ----> console.log(step1) returns: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0','2', '3']
    let step2 = step1.reverse();    // ----> console.log(step2) returns: [ '3', '2', '0', '2',' ', 'a', 'h', 'p', 'l', 'A' ]
    let step3 = step2.join("");     // ----> console.log(step3) returns: 3202 ahplA
    return step3;                   // ----> hands the value of step3 back as the result of cohortReversio. need a variable declaration (let) at each step to hold the result of the previous action.
};
console.log(cohortReversio(currentCohort));
// Expected output: "3202 ahplA"

//                              ********* So, I'm not sure why this string does not show quotation marks when logged? checking step3 with the typeOf monitor tells me that it IS a string, just can't get it to display with quotes. may simply be an issue with my setup.**********




// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:  Not sure how to pseudo code this one, but here's my thought process:  this one is tricky because it's easy to permanently modify myNumbers by mistake in the first question, messing up the array when it comes time to answer question 2. so we fix that by only modifying the array inside of a function using the local-scope variable, let.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

//ANSWER:
function answer1(input2) {
  let slicedNumbers = input2.slice(0, 8)                   // ----> makes a new 'subarray' from myNumbers, only containing the values from the first position (0) to the second-to-last (8, one index higher than the desired length. since index counting with slice is non inclusive, it WILL NOT include the final value as the end point.)   [13, 34, 42, 5, 5, 10, 27, 42]
  let result = slicedNumbers.lastIndexOf(givenValue1)      // ---->  searches the array slicedNumbers for the last index containing a specific value, in this case givenValue1. [7]
  return result
}
console.log(answer1(myNumbers))
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))            // ---->  since we didn't mess with the array during the first question, we can simply run .lastIndexOf(givenValue2) against myNumbers, searching for the final instance of a specified value. (givenValue2 === 10)
// Expected output: 8




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: 
// const exampleArray = [3, 1, 2]
//   console.log(exampleArray.sort((firstComparedIndex, secondComparedIndex) => firstComparedIndex - secondComparedIndex)) [returns 1, 2, 3]

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a))    // ----> sorts the list in reverse order, by running the sort method with a compare function (start comparing values in an array, assigning the 0th index to 'a' and the next value to 'b'. if (b-a) would produce a negative number, then b is sorted "above" a. then continues down the array, moving along the index by one spot and repeating the comparison. this sorts an array from greatest to least. to invert this, change the order of a and b in the comparison function so a is compared against b) array is permanently modified since the instructions didn't specify not to. to avoid this, can wrap the sort in a function first.

//  *Wow that explanation took twice as long to write as the code!*

// Expected output: [82, 80, 79, 77, 76, 73, 72]
    

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log (sanDiegoWinterTemperatures.sort((a, b) => b - a))      // ----> same as the previous question.
// Expected output: [68, 67, 66, 66, 62, 59, 59]
