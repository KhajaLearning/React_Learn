const { number } = require("prop-types");

const numbers = [1, 2, 3, 4, 5];
const tens = [];
//for loop

// for (let index = 0; index < numbers.length; index++) {
//   const number = numbers[index];
//   tens.push(number * 10);
// }
// console.log(tens);

//foreach loop
// numbers.forEach((number) => {
//   tens.push(number * 10);
// });

// console.log(tens);

//map loop
numbers = numbers.map((number) => number * 10);

// console.log(ten);
console.log(numbers);
