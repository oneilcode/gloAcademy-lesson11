'use strict';

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');

const btnCircle = document.getElementById('e_btn');

const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');

console.dir(circle);

// 1) Повесить на кнопку обработчик события click 

btn.addEventListener('click', () => {
   let color = input.value;
   if (input.value !== 'null') {
      square.style.backgroundColor = color;
   }
});

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; " 

btnCircle.style.display = 'none';

//3) Повесить на input[type=range] обработчик события input

const logger = function (event) {
   span.textContent = event.target.value;
   circle.style.height = event.target.value + '%';
   circle.style.width = event.target.value + '%';
};

range.addEventListener('input', logger);