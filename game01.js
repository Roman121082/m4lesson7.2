'use strict';

const num = Math.floor(Math.random() * 100);

const isNumber = function (numUser) {
  return !isNaN(parseFloat(numUser)) && isFinite(numUser);
};

function randomNum() {
  const numUser = prompt("Введите число от 1 до 100", '');

  if (numUser === null) {
    return;
  }

  if (!isNumber(numUser)) {
    alert('Введите число!');
    return randomNum(numUser);
  }

  if (+numUser > num) {
    alert('Меньше!');
    return randomNum();
  }

  if (+numUser < num) {
    alert('Больше!');
    return randomNum();
  }

  if (+numUser === num) {
    alert('Правильно!');
  }
}
randomNum();






