// Задание #6

const numbers = [10, 4, 100, -5, 54, 2]

// function firstMethod(arr) {
//   let sumNumbers = 0
//   for (let i = 0; i < arr.length; i++) {
//     sumNumbers += arr[i] ** 3
//   }
//   return sumNumbers
// }
// console.log(firstMethod(numbers))

// function secondMethod(arr) {
//   let sumNumbers = 0
//   for (let i of arr) {
//     sumNumbers += i ** 3
//   }
//   return sumNumbers
// }
// console.log(secondMethod(numbers))

// function thirdMethod(arr) {
//   let sumNumbers = 0
//   arr.forEach((el) => {
//     sumNumbers += el ** 3
//   })
//   return sumNumbers
// }
// console.log(thirdMethod(numbers))

function fourthMethod(arr) {
  return arr.reduce((acc, elem) => acc + elem ** 3, 0)
}
console.log(fourthMethod(numbers))
