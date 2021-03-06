const arrow1 = function arr(val) {
  return `Hello ${val}`; // return "Hello" + val; concatenation is not passing linter instead taking interpolation
};
// console.log(arrow1('Lucky'));
document.getElementById('display-books').innerHTML = arrow1('Lucky');

// Shorify 1 (Intro of arrow Function)
const arrow2 = (val) => `Hello ${val}`;
// console.log(arrow2('Lucky'));
document.getElementById('display-books').innerHTML = arrow2('Lucky');

// Shorify 3 (If there is just 1 statement inside the function)
const arrow3 = (val) => `Hello ${val}`;
// console.log(arrow3('Lucky'));
document.getElementById('display-books').innerHTML = arrow3('Lucky');

// Shorify Final
const arrow4 = (name) => `Hello ${name}`;
// console.log(arrow4('Lucky'));
document.getElementById('display-books').innerHTML = arrow4('Lucky');

// without parameter (value)
const arrow = () => 'Hello World';
// console.log(arrow());
document.getElementById('display-books').innerHTML = arrow(); // the latest change will be displayed

// without 2 parameter (value)
const arrow5 = (name, surname) => `Hello ${name} ${surname}`;
// console.log(arrow5('Lucky', 'Patra'));
document.getElementById('display-books').innerHTML = arrow5('Lucky', 'Patra');
