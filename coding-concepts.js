// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: 11
// b) Verify and explain: 12; I get a little confused with spaces when trying to find the index, so that was why I said it was 11. I will remember for the next time, that spaces are included!


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: l; Index starts at 0, so the letter H started from 0 and the 3rd index would be the first l


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby; Instead of just putting the number in between [], we assigned the number to a variable and called that variable when we were logging it to the console


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: ['SATURDAY', 'SUNDAY']
// b) Verify and explain: module._compile error
//REVIEW THIS PROBLEM!

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 21
// b) Verify and explain: number; this question throw me off. It was asking for the type of data in dataTypes array, but it also asked for the length. Not sure why the answer is number
//REVIEW AND ASK QUESTION!
//Sarah said: dataType.length would just return whatever the number is for that character, but when you add the typeof operator, you get back the name of the data type
