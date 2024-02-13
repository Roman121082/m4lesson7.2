'use strict';

const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let enteredNumber = +prompt(`Угадай число от 1 до 100`);

console.log(enteredNumber);
for (let i = 1; i < Infinity; i++) {
  if (enteredNumber < randomNumber) {
    enteredNumber = +prompt(`БОЛЬШЕ, Пробуй еще`);
  };

  if (enteredNumber > randomNumber) {
    enteredNumber = +prompt(`МЕНЬШЕ, Пробуй еще`);
  };

  if (enteredNumber == randomNumber) {
    alert('Угадал');
  }
}

// () => {
//   const randomArray = [];

//   for (let i = 1; i <= elements; i++)
//     randomArray.push(Math.round(Math.random() * 100));

//   return randomArray;
// }

// console.log(`случайные числа от 1 до 100: "${randomNumberArray(10)}"`);

