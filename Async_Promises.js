const fs = require("fs")
//async function
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data)
})

console.log("hii there")

// create our own async function
// its ntg but wrapping the fun on top of js provided async function
function readFileFn(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data)
  })
}
// callback fn to call
function onDone(data) {
  console.log(data)
}
readFileFn(onDone)

// the above method is the bad way
// creating async fns using promises

//readFileFnUsingPromise is the async function
function readFileFnUsingPromise() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data)
    })
  })
}
// readFileFnUsingPromise().then(onDone)
function main() {
  readFileFnUsingPromise().then(function (value) {
    console.log(value)
  })
}
main()
//pending, resolved, rejected

// using Async and await

async function main1() {
  //no callbacks no .then
  const value = await readFileFnUsingPromise()
  console.log(value)
}
// callback, promise and .then, async/await do the same thing