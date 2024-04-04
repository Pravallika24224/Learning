// Write the program to greet a person given their first and last name

let firstName = "Pothireddy"
let lastName = "Pravallika"

console.log("Hello " + firstName + " " + lastName)

// Write a program that greets a person based on their gender. (If else)

let isMarried = true
if (isMarried === true) {
  console.log(firstName + " " + lastName + " is Married");
}
else {
  console.log(firstName + " " + lastName + " is not Married");
}

// Write a program that counts from 0 - 1000 and prints (for loop)

let count = 0
for (let i = 0; i <= 100; i++) {
  count = count + i
  console.log(i)
}
console.log(count)

// Write a program prints all the even numbers in an array
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumberArray = []
for (let i = 0; i <= numberArray.length; i++) {
  if (numberArray[i] % 2 === 0)
    evenNumberArray.push(numberArray[i])
}
console.log(evenNumberArray, " even numbers in an array")

// Write a program to print the biggest number in an arrya
let numberArray1 = [2, 5, 1, 6, 8, 11, 24, 56, 32, 73]
let biggestNumber = -Infinity
for (let i = 0; i <= numberArray1.length; i++) {
  if (numberArray1[i] > biggestNumber) {
    biggestNumber = numberArray1[i]
  }
}
console.log(biggestNumber + " biggest number")

// Write a program that prints all the male people’s first name given a complex object 
let peopleArray = [
  {
    name: "Pravallika",
    gender: "female",
  },
  {
    name: "Lahari",
    gender: "female",
  },
  {
    name: "Vijay",
    gender: "male",
  },
  {
    name: "veda",
    gender: "female",
  },
]

for (let i = 0; i < peopleArray.length; i++) {
  if (peopleArray[i].gender === "male") {
    console.log(peopleArray[i].name)
  }
}

// Write a program that reverses all the elements of an array

let originalArray = [1, 2, 3, 4, 5]
// console.log(originalArray.reverse())
let reversedArray = []
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i])
}
console.log(reversedArray, "reversed array")

// Write a function that finds the sum of two numbers

function findSum(arg1, arg2) {
  let result = arg1 + arg2
  return result
}
// Write another function that displays this result in a pretty format
function displayResult(data) {
  console.log("Result of the sum is : " + data)
}
const sum = findSum(2, 3)
displayResult(sum)

// Now u are allowed to call only single function instead of 2
function alteredFindSum(arg1, arg2, fnToCall) {
  let result = arg1 + arg2
  return fnToCall(result)
}
//Callback fn
alteredFindSum(2, 3, displayResult)

// Calculate arithmatics using callbacks

function calculateArithmatics(arg1, arg2, callbackFn) {
  return callbackFn(arg1, arg2)
}

function add(arg1, arg2) {
  return console.log(arg1 + arg2, " sum")
}
function sub(arg1, arg2) {
  return console.log(arg1 - arg2, " sub")
}

calculateArithmatics(3, 2, add)

// Create a counter in Javascript (counts down from 30 to 0)
for (let i = 30; i >= 0; i--) {
  console.log(i)
}

// Calculate the time it takes between a setTimeout call and the inner function actually running
//Create a terminal clock (HH:MM:SS)
function currentTime() {
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  let time = hh + ":" + mm + ":" + ss 
  setTimeout(function(){ currentTime() }, 1000);
  console.log(time)
}
// currentTime()

// sum 0-100
let sumOfNumbers = 0
for(let i = 0; i<=100; i++) {
  sumOfNumbers = sumOfNumbers+i
}
console.log(sumOfNumbers);

// sum of squares of numbers
function squares(n) {
  return n * n
}
function sumOfSquares(a, b) {
  let val1 = squares(a)
  let val2 = squares(b)
  return val1 + val2
}
console.log(sumOfSquares(2, 3))
// using callbacks
function sumOfSometing(a, b, fn) {
  let val1 = fn(a)
  let val2 = fn(b) 
  return val1 + val2
}
console.log(sumOfSometing(2, 3, squares))

// Async functions

function findSumTillN(n) {
  let ans = 0
  for(let i = 0; i< n; i++)  {
    ans += i
  }
  return ans
}
function findSumTill100() {
  console.log(findSumTillN(100))
}
setTimeout(findSumTill100, 1000)

// How to make a function wait for some time without calling setTimout
// ans: keep callstack busy with another function

function syncSleep() {
  let a =1
  for(let i = 0; i<1000000000; i++){
    a++
  }
}
console.log("hello world")
syncSleep()
findSumTill100()