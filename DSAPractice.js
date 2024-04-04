// var twoSum = function (nums, target) {
//   let indexArray = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target)
//         indexArray = [i, j]
//     }
//   }
//   return indexArray
// };

// console.log(twoSum([3, 2, 4, 5], 8))

// var isPalindrome = function (x) {
//   let number = x.toString()
//   // single line result
//   let result = number.split('').reverse().join('')
//   let reversedArray = []
//   let reversedString

//   for (let i = number.length - 1; i >= 0; i--) {
//     reversedArray.push(number[i])
//   }
//   reversedString = Number(reversedArray.join(""))
//   if (reversedString === x)
//     return true
//   else
//     return false
// };

// console.log(isPalindrome(-121))

function isAnagram(str1, str2) {
  let l1 = str1.length
  let l2 = str2.length
  if (l1 !== l2)
    return false
  str1.split('').sort()
  str2.split('').sort()
  for (let i = 1; i <= str1.length; i++)
    if (str1[i] === str2[i])
      return true
}

console.log(isAnagram("spar", "rasp"))